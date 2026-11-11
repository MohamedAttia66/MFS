// Relay for the Telegram Bot API (used when the automation server can't reach Telegram directly).
// Only the bot whose numeric ID is in TG_BOT_ID can use it.
module.exports = async (req, res) => {
  const bot = process.env.TG_BOT_ID;
  let p = req.query.p;
  if (Array.isArray(p)) p = p.join('/');
  p = String(p || '');
  const allowed = bot && (p.startsWith('bot' + bot + ':') || p.startsWith('file/bot' + bot + ':'));
  if (!allowed) return res.status(403).json({ ok: false, description: 'Forbidden' });

  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(req.query)) if (k !== 'p') [].concat(v).forEach(x => qs.append(k, x));
  const url = 'https://api.telegram.org/' + p + (qs.toString() ? '?' + qs.toString() : '');

  const opts = { method: req.method, headers: {} };
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.body !== undefined && req.body !== null) {
    const ct = req.headers['content-type'] || 'application/json';
    if (Buffer.isBuffer(req.body) || typeof req.body === 'string') { opts.body = req.body; opts.headers['content-type'] = ct; }
    else if (ct.includes('application/x-www-form-urlencoded')) { opts.body = new URLSearchParams(req.body).toString(); opts.headers['content-type'] = ct; }
    else { opts.body = JSON.stringify(req.body); opts.headers['content-type'] = 'application/json'; }
  }
  try {
    const r = await fetch(url, { ...opts, signal: AbortSignal.timeout(25000) });
    const buf = Buffer.from(await r.arrayBuffer());
    const ct = r.headers.get('content-type');
    if (ct) res.setHeader('content-type', ct);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(r.status).send(buf);
  } catch (e) {
    return res.status(504).json({ ok: false, description: 'Relay timeout' });
  }
};
