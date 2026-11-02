// Relays website chat messages to the support assistant.
// The assistant's address is a server-side environment variable only (CHAT_WEBHOOK_URL).
module.exports = async (req, res) => {
  const allowed = (process.env.ALLOWED_ORIGINS || '*').split(',').map(s => s.trim()).filter(Boolean);
  const origin = req.headers.origin || '';
  const allowOrigin = allowed.includes('*') ? '*' : (allowed.includes(origin) ? origin : allowed[0]);
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Use POST' });

  const url = process.env.CHAT_WEBHOOK_URL;
  if (!url) return res.status(500).json({ error: 'Chat is not configured' });
  const { sessionId, message } = req.body || {};
  if (typeof sessionId !== 'string' || !/^[A-Za-z0-9_-]{8,80}$/.test(sessionId) ||
      typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Invalid message' });
  }
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'sendMessage', sessionId, chatInput: message.trim().slice(0, 2000) }),
      signal: AbortSignal.timeout(55000)
    });
    const text = await r.text();
    let data; try { data = JSON.parse(text); } catch (e) { data = { output: text }; }
    const item = Array.isArray(data) ? data[0] : data;
    const reply = item && (item.output || item.text);
    if (!r.ok || !reply) return res.status(502).json({ error: 'No reply' });
    return res.status(200).json({ reply: String(reply) });
  } catch (e) {
    return res.status(504).json({ error: 'Timeout' });
  }
};
