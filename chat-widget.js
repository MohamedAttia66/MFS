/* The Maintainers · Technical Support chat widget
   Add to any page:  <script src="https://YOUR-SITE.vercel.app/chat-widget.js" defer></script>  */
(function () {
  if (window.__tmChatLoaded) return;
  window.__tmChatLoaded = true;

  var script = document.currentScript || (function () { var s = document.getElementsByTagName('script'); return s[s.length - 1]; })();
  var API = new URL('/api/chat', script.src).href;

  var ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgMTQwIj4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0ic2siIGN4PSIzOCUiIGN5PSIzMiUiIHI9Ijc1JSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZlMGM0Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iI2VmYjE4NCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M5ODI1YSIvPjwvcmFkaWFsR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImhhdCIgY3g9IjMyJSIgY3k9IjIyJSIgcj0iOTAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmY2YjgiLz48c3RvcCBvZmZzZXQ9Ii40MiIgc3RvcC1jb2xvcj0iI2ZmY2IyZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2QzODYwMCIvPjwvcmFkaWFsR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJyaW0iIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmQyM2YiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiNTZmMDAiLz48L2xpbmVhckdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJzdWl0IiBjeD0iNDAlIiBjeT0iMTUlIiByPSI5NSUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzRhODJjMiIvPjxzdG9wIG9mZnNldD0iLjU1IiBzdG9wLWNvbG9yPSIjMWY0Yzg0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMGUyNzQ3Ii8+PC9yYWRpYWxHcmFkaWVudD4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdmUiIGN4PSIzNSUiIGN5PSIzMCUiIHI9IjgwJSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZkMjdhIi8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iI2YyOWExYyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M0NmQwMCIvPjwvcmFkaWFsR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImV5ZSIgY3g9IjQwJSIgY3k9IjM1JSIgcj0iNzAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1YTNhMjYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYjEwMGEiLz48L3JhZGlhbEdyYWRpZW50PgogICAgPGZpbHRlciBpZD0ic2giIHg9Ii0zMCUiIHk9Ii0zMCUiIHdpZHRoPSIxNjAlIiBoZWlnaHQ9IjE2MCUiPjxmZURyb3BTaGFkb3cgZHg9IjAiIGR5PSIyIiBzdGREZXZpYXRpb249IjIiIGZsb29kLWNvbG9yPSIjMGIxYTJlIiBmbG9vZC1vcGFjaXR5PSIuMzUiLz48L2ZpbHRlcj4KICAgIDxmaWx0ZXIgaWQ9InNvZnQiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuMiIvPjwvZmlsdGVyPgogIDwvZGVmcz4KICA8IS0tIGJvZHkgLS0+CiAgPHBhdGggZD0iTTI4IDE0MCBDMzAgMTEyIDQ2IDEwMCA3MiAxMDAgQzk4IDEwMCAxMTQgMTEyIDExNiAxNDAgWiIgZmlsbD0idXJsKCNzdWl0KSIgZmlsdGVyPSJ1cmwoI3NoKSIvPgogIDxwYXRoIGQ9Ik02MCAxMDEgTDcyIDExNyBMODQgMTAxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwYjIxNDAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0zNiAxMjggQzQwIDExOCA0NiAxMTIgNTIgMTA4IiBzdHJva2U9IiM1ZjkzY2YiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjUiLz4KICA8IS0tIG5hbWUgYmFkZ2UgLS0+CiAgPHJlY3QgeD0iODAiIHk9IjExNyIgd2lkdGg9IjI2IiBoZWlnaHQ9IjEzIiByeD0iMyIgZmlsbD0iI2ZmZiIgZmlsdGVyPSJ1cmwoI3NoKSIvPgogIDx0ZXh0IHg9IjkzIiB5PSIxMjYuNiIgZm9udC1mYW1pbHk9IkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzhhMTUzOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9Ii4zIj5NRlM8L3RleHQ+CiAgPCEtLSByYWlzZWQgd2F2aW5nIGFybSAobGVmdCBzaWRlIG9mIGltYWdlKSAtLT4KICA8cGF0aCBkPSJNNDYgMTEyIEMzNiA5OCAzMCA4MiAyOCA2NiIgc3Ryb2tlPSJ1cmwoI3N1aXQpIiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGZpbHRlcj0idXJsKCNzaCkiLz4KICA8cGF0aCBkPSJNNDYgMTEyIEMzNiA5OCAzMCA4MiAyOCA2NiIgc3Ryb2tlPSIjNWY5M2NmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAwKSIvPgogIDwhLS0gZ2xvdmUgLS0+CiAgPGcgZmlsdGVyPSJ1cmwoI3NoKSI+CiAgICA8ZWxsaXBzZSBjeD0iMjciIGN5PSI1NCIgcng9IjExIiByeT0iMTIuNSIgZmlsbD0idXJsKCNnbG92ZSkiLz4KICAgIDxyZWN0IHg9IjE2LjUiIHk9IjM1IiB3aWR0aD0iNiIgaGVpZ2h0PSIxNiIgcng9IjMiIGZpbGw9InVybCgjZ2xvdmUpIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTQgMTkuNSA0MykiLz4KICAgIDxyZWN0IHg9IjIyLjUiIHk9IjMxIiB3aWR0aD0iNiIgaGVpZ2h0PSIxOCIgcng9IjMiIGZpbGw9InVybCgjZ2xvdmUpIiB0cmFuc2Zvcm09InJvdGF0ZSgtNCAyNS41IDQwKSIvPgogICAgPHJlY3QgeD0iMjguNSIgeT0iMzIiIHdpZHRoPSI2IiBoZWlnaHQ9IjE3IiByeD0iMyIgZmlsbD0idXJsKCNnbG92ZSkiIHRyYW5zZm9ybT0icm90YXRlKDYgMzEuNSA0MCkiLz4KICAgIDxyZWN0IHg9IjMzLjUiIHk9IjM3IiB3aWR0aD0iNS41IiBoZWlnaHQ9IjE0IiByeD0iMi43NSIgZmlsbD0idXJsKCNnbG92ZSkiIHRyYW5zZm9ybT0icm90YXRlKDE2IDM2IDQ0KSIvPgogICAgPGVsbGlwc2UgY3g9IjE1IiBjeT0iNTciIHJ4PSI0LjUiIHJ5PSI3IiBmaWxsPSJ1cmwoI2dsb3ZlKSIgdHJhbnNmb3JtPSJyb3RhdGUoLTM1IDE1IDU3KSIvPgogICAgPHJlY3QgeD0iMTgiIHk9IjYyIiB3aWR0aD0iMTgiIGhlaWdodD0iNiIgcng9IjMiIGZpbGw9IiNjNDZkMDAiIG9wYWNpdHk9Ii41NSIvPgogIDwvZz4KICA8IS0tIG1vdGlvbiBsaW5lcyAtLT4KICA8cGF0aCBkPSJNOCAzNCBxLTQgNiAwIDEyIE0zIDMwIHEtNiAxMCAwIDIwIiBzdHJva2U9IiNmZmNiMmUiIHN0cm9rZS13aWR0aD0iMi40IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9Ii45Ii8+CiAgPCEtLSBuZWNrIC0tPgogIDxwYXRoIGQ9Ik02MyA4OCBoMTggdjE0IGMtNCA0IC0xNCA0IC0xOCAweiIgZmlsbD0iI2Q3OTI2OCIvPgogIDwhLS0gZWFycyAtLT4KICA8ZWxsaXBzZSBjeD0iNDQiIGN5PSI2OCIgcng9IjUuNSIgcnk9IjcuNSIgZmlsbD0idXJsKCNzaykiLz4KICA8ZWxsaXBzZSBjeD0iMTAwIiBjeT0iNjgiIHJ4PSI1LjUiIHJ5PSI3LjUiIGZpbGw9InVybCgjc2spIi8+CiAgPCEtLSBoZWFkIC0tPgogIDxlbGxpcHNlIGN4PSI3MiIgY3k9IjY2IiByeD0iMjgiIHJ5PSIyOSIgZmlsbD0idXJsKCNzaykiIGZpbHRlcj0idXJsKCNzaCkiLz4KICA8IS0tIGV5ZXMgLS0+CiAgPGVsbGlwc2UgY3g9IjYxIiBjeT0iNjYiIHJ4PSI1IiByeT0iNi4yIiBmaWxsPSIjZmZmIi8+CiAgPGVsbGlwc2UgY3g9IjgzIiBjeT0iNjYiIHJ4PSI1IiByeT0iNi4yIiBmaWxsPSIjZmZmIi8+CiAgPGVsbGlwc2UgY3g9IjYyIiBjeT0iNjciIHJ4PSIzLjYiIHJ5PSI0LjYiIGZpbGw9InVybCgjZXllKSIvPgogIDxlbGxpcHNlIGN4PSI4NCIgY3k9IjY3IiByeD0iMy42IiByeT0iNC42IiBmaWxsPSJ1cmwoI2V5ZSkiLz4KICA8Y2lyY2xlIGN4PSI2My4zIiBjeT0iNjUiIHI9IjEuNSIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9Ijg1LjMiIGN5PSI2NSIgcj0iMS41IiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTU0LjUgNTcgcTYgLTQuNSAxMiAtMSBNNzcuNSA1NiBxNiAtMy41IDEyIDEiIHN0cm9rZT0iIzVhMzgyNiIgc3Ryb2tlLXdpZHRoPSIyLjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwhLS0gY2hlZWtzIC0tPgogIDxlbGxpcHNlIGN4PSI1NCIgY3k9Ijc3IiByeD0iNSIgcnk9IjMiIGZpbGw9IiNmMjg0NmYiIG9wYWNpdHk9Ii4zNSIgZmlsdGVyPSJ1cmwoI3NvZnQpIi8+CiAgPGVsbGlwc2UgY3g9IjkwIiBjeT0iNzciIHJ4PSI1IiByeT0iMyIgZmlsbD0iI2YyODQ2ZiIgb3BhY2l0eT0iLjM1IiBmaWx0ZXI9InVybCgjc29mdCkiLz4KICA8IS0tIG5vc2UgLS0+CiAgPGVsbGlwc2UgY3g9IjcyIiBjeT0iNzMiIHJ4PSIzIiByeT0iMi4zIiBmaWxsPSIjZDQ4YTYwIi8+CiAgPCEtLSBvcGVuIHNtaWxlIC0tPgogIDxwYXRoIGQ9Ik02MiA4MCBxMTAgMTEgMjAgMCBxLTEwIDMgLTIwIDB6IiBmaWxsPSIjN2EyZTFmIi8+CiAgPHBhdGggZD0iTTY1IDgyLjUgcTcgNCAxNCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMi4yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8IS0tIGhhcmQgaGF0IC0tPgogIDxwYXRoIGQ9Ik00MyA1MiBDNDMgMzAgNTYgMjAgNzIgMjAgQzg4IDIwIDEwMSAzMCAxMDEgNTIgWiIgZmlsbD0idXJsKCNoYXQpIiBmaWx0ZXI9InVybCgjc2gpIi8+CiAgPHBhdGggZD0iTTY4LjUgMjAuNSBoNyB2MzEgaC03eiIgZmlsbD0iI2YwYWQwMCIgb3BhY2l0eT0iLjkiLz4KICA8cGF0aCBkPSJNMzcgNTAuNSBoNzAgYzIuNiAwIDQgMS44IDQgNCBjMCAyLjIgLTEuNCAzLjggLTQgMy44IGgtNzAgYy0yLjYgMCAtNCAtMS42IC00IC0zLjggYzAgLTIuMiAxLjQgLTQgNCAtNHoiIGZpbGw9InVybCgjYnJpbSkiLz4KICA8ZWxsaXBzZSBjeD0iNTciIGN5PSIzMCIgcng9IjcuNSIgcnk9IjQiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii42IiB0cmFuc2Zvcm09InJvdGF0ZSgtMjggNTcgMzApIi8+CiAgPCEtLSB3cmVuY2ggaW4gcG9ja2V0IC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkgMykgcm90YXRlKDIwIDEwNCAxMTYpIiBmaWx0ZXI9InVybCgjc2gpIj4KICAgIDxyZWN0IHg9IjEwMSIgeT0iMTA0IiB3aWR0aD0iNiIgaGVpZ2h0PSIyMiIgcng9IjMiIGZpbGw9IiNjOWQzZGMiIHN0cm9rZT0iIzViNjc3MiIgc3Ryb2tlLXdpZHRoPSIuOCIvPgogICAgPHBhdGggZD0iTTEwNCA5MiBhNy41IDcuNSAwIDEgMCAuMDEgMHogTTEwMC44IDkyLjUgaDYuNCB2Ni41IGgtNi40eiIgZmlsbD0iI2UzZTllZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM1YjY3NzIiIHN0cm9rZS13aWR0aD0iLjgiLz4KICA8L2c+Cjwvc3ZnPg==';
  var GREETING = 'Hello, and welcome to The Maintainers Technical Support. This is Amin speaking. How may I assist you today?';
  var REMINDER = "Are you still there? Whenever you're ready, just reply here and I'll continue with your request.";
  var CLOSING = "As we haven't heard back from you, this chat has now been closed. You can message us at any time to start a new request. Thank you for contacting The Maintainers.";
  var REMIND_MS = 3 * 60 * 1000, CLOSE_MS = 6 * 60 * 1000;

  var KEY = 'tm_chat_session';
  function newSession() { var id = 'web' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10); try { sessionStorage.setItem(KEY, id); } catch (e) {} return id; }
  var sessionId = (function () { try { return sessionStorage.getItem(KEY) || newSession(); } catch (e) { return newSession(); } })();

  var host = document.createElement('div');
  host.setAttribute('aria-live', 'polite');
  document.body.appendChild(host);
  var root = host.attachShadow({ mode: 'open' });

  root.innerHTML = '\
<style>\
  :host { all: initial; }\
  * { box-sizing: border-box; }\
  .wrap { --ink:#14263b; --brand:#8a1538; --soft:#f3f5f8; --line:#dde3ea; --paper:#fff; --muted:#6f8193;\
          font-family: -apple-system, "Segoe UI", Roboto, Tahoma, Arial, sans-serif; color: var(--ink); }\
  @media (prefers-color-scheme: dark) { .wrap { --ink:#e3ebf3; --soft:#16253a; --line:#26394f; --paper:#111e2c; --muted:#8fa1b3; --brand:#c2305e; } }\
  .bubble { position: fixed; right: 12px; bottom: calc(0px + env(safe-area-inset-bottom, 0px)); width: 136px; height: 136px;\
            background: none; border: 0; padding: 0; cursor: pointer; z-index: 2147483001; filter: drop-shadow(0 6px 14px rgba(0,0,0,.28));\
            transition: transform .2s; transform-origin: bottom center; }\
  .bubble:hover { transform: translateY(-3px) scale(1.04); }\
  .bubble img { width: 100%; height: 100%; display: block; }\
  .bubble.wave img { animation: wave 1.6s ease-in-out 2; transform-origin: 50% 90%; }\
  @keyframes wave { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(4deg); } }\
  @media (prefers-reduced-motion: reduce) { .bubble.wave img { animation: none; } }\
  .dot { display: none; }\
  .hint { position: fixed; right: 124px; bottom: calc(30px + env(safe-area-inset-bottom, 0px)); z-index: 2147483000;\
          background: #12355b; color: #fff; border-radius: 22px; padding: 14px 44px 14px 16px; min-width: 250px;\
          display: flex; align-items: center; gap: 12px; cursor: pointer; box-shadow: 0 10px 28px rgba(10,30,60,.35);\
          font-size: 13.5px; line-height: 1.35; }\
  .hint .ic { width: 38px; height: 38px; border-radius: 50%; background: #fff; display: grid; place-items: center; flex: none; }\
  .hint .ic svg { width: 20px; height: 20px; }\
  .hint b { display: block; font-size: 16px; font-weight: 700; color: #fff; }\
  .hint .hx { position: absolute; top: 50%; right: 12px; transform: translateY(-50%); background: none; border: 0; color: #fff;\
              font-size: 22px; line-height: 1; cursor: pointer; opacity: .85; padding: 4px; }\
  .hint .hx:hover { opacity: 1; }\
  .hint[hidden] { display: none; }\
  .panel { position: fixed; right: 20px; bottom: calc(140px + env(safe-area-inset-bottom, 0px)); width: 380px; height: 580px; max-height: calc(100vh - 120px);\
           background: var(--paper); border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 16px 48px rgba(0,0,0,.28);\
           display: none; flex-direction: column; overflow: hidden; z-index: 2147483000; }\
  .panel.open { display: flex; }\
  .head { background: #12263f; color: #fff; padding: 14px 16px; display: flex; align-items: center; gap: 12px; }\
  .mark { width: 44px; height: 44px; border-radius: 50%; display: block; flex: none; background: #fff; object-fit: cover; object-position: 50% 8%; }\
  .head b { display: block; font-size: 15px; }\
  .head small { font-size: 12.5px; opacity: .8; display: flex; align-items: center; gap: 6px; }\
  .head small::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #3ccf9a; }\
  .x { margin-left: auto; background: none; border: 0; color: #fff; font-size: 22px; cursor: pointer; line-height: 1; padding: 4px 6px; opacity: .8; }\
  .x:hover { opacity: 1; }\
  .log { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 10px; background: var(--soft); }\
  .msg { max-width: 85%; padding: 10px 13px; border-radius: 14px; font-size: 14.5px; line-height: 1.5; white-space: pre-wrap; unicode-bidi: plaintext; text-align: start; overflow-wrap: anywhere; }\
  .amin { align-self: flex-start; background: var(--paper); border: 1px solid var(--line); border-end-start-radius: 4px; }\
  .user { align-self: flex-end; background: var(--brand); color: #fff; border-end-end-radius: 4px; }\
  .note { align-self: center; font-size: 12.5px; color: var(--muted); text-align: center; }\
  .ref { font-weight: 700; direction: ltr; unicode-bidi: isolate; }\
  .typing { align-self: flex-start; display: inline-flex; gap: 4px; padding: 12px 14px; background: var(--paper); border: 1px solid var(--line); border-radius: 14px; }\
  .typing i { width: 6px; height: 6px; border-radius: 50%; background: var(--muted); opacity: .4; animation: b 1.2s infinite; }\
  .typing i:nth-child(2) { animation-delay: .2s; } .typing i:nth-child(3) { animation-delay: .4s; }\
  @keyframes b { 40% { opacity: 1; } }\
  @media (prefers-reduced-motion: reduce) { .typing i { animation: none; opacity: .8; } }\
  form { display: flex; gap: 8px; padding: 12px; border-top: 1px solid var(--line); background: var(--paper); }\
  textarea { flex: 1; resize: none; border: 1px solid var(--line); border-radius: 10px; padding: 10px 12px; font: inherit; font-size: 14.5px; color: var(--ink);\
             background: var(--paper); max-height: 110px; unicode-bidi: plaintext; }\
  textarea:focus { outline: 2px solid var(--brand); outline-offset: -1px; }\
  .send { background: var(--brand); color: #fff; border: 0; border-radius: 10px; padding: 0 16px; font: inherit; font-weight: 600; cursor: pointer; }\
  .send:disabled { opacity: .5; cursor: default; }\
  .foot { text-align: center; font-size: 11.5px; color: var(--muted); padding: 0 0 8px; background: var(--paper); }\
  @media (max-width: 520px) { .panel { right: 0; left: 0; bottom: 0; width: 100%; height: 100%; max-height: none; border-radius: 0;\
                                       padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }\
                              .panel.open ~ .bubble, .panel.open ~ .hint { display: none; } .bubble { width: 96px; height: 96px; } .hint { right: 88px; min-width: 0; bottom: 18px; padding: 11px 38px 11px 12px; } .hint b { font-size: 14.5px; } }\
</style>\
<div class="wrap">\
  <div class="panel" role="dialog" aria-label="The Maintainers Technical Support chat">\
    <div class="head"><img class="mark" alt=""><div><b>The Maintainers</b><small>Technical Support · Amin</small></div>\
      <button class="x" aria-label="Close chat">&times;</button></div>\
    <div class="log"></div>\
    <form><textarea rows="1" dir="auto" placeholder="Type your message…" aria-label="Message"></textarea><button class="send" type="submit">Send</button></form>\
    <div class="foot">The Maintainers · Facility Management, Qatar</div>\
  </div>\
  <div class="hint" hidden><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#8a1538" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/></svg></span><span><b>Need a technician?</b>Chat with Amin, 24/7</span><button class="hx" aria-label="Hide">&times;</button></div>\
  <button class="bubble" aria-label="Chat with The Maintainers technical support"><img alt=""><span class="dot"></span></button>\
</div>';

  var panel = root.querySelector('.panel'), log = root.querySelector('.log'), form = root.querySelector('form'),
      input = root.querySelector('textarea'), sendBtn = root.querySelector('.send');
  root.querySelectorAll('.bubble img, img.mark').forEach(function (i) { i.src = ICON; });
  var hint = root.querySelector('.hint');
  var dismissed = false; try { dismissed = sessionStorage.getItem('tm_chat_hint') === 'off'; } catch (e) {}
  var bubbleEl = root.querySelector('.bubble');
  setTimeout(function () { if (!panel.classList.contains('open') && !dismissed) { hint.hidden = false; bubbleEl.classList.add('wave'); } }, 2000);
  hint.addEventListener('click', function (e) {
    if (e.target.closest('.hx')) { hint.hidden = true; dismissed = true; try { sessionStorage.setItem('tm_chat_hint', 'off'); } catch (x) {} return; }
    open();
  });
  var busy = false, started = false, timers = [];

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s).,!?:;]|$)/g, '$1<b>$2</b>')
      .replace(/\b(TM-\d{6}-\d{4}|BK-\d{6}-\d{3})\b/g, '<span class="ref">$1</span>');
  }
  function add(role, text) {
    var el = document.createElement('div');
    el.className = role === 'note' ? 'note' : 'msg ' + role;
    el.setAttribute('dir', 'auto');
    el.innerHTML = role === 'user' ? esc(text) : fmt(text);
    log.appendChild(el); log.scrollTop = log.scrollHeight;
  }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function armTimers() {
    clearTimers();
    timers.push(setTimeout(function () { add('amin', REMINDER); }, REMIND_MS));
    timers.push(setTimeout(function () {
      add('amin', CLOSING); add('note', 'Chat closed');
      sessionId = newSession(); started = false;
    }, CLOSE_MS));
  }
  function open() {
    panel.classList.add('open'); hint.hidden = true;
    if (!started) { started = true; add('amin', GREETING); armTimers(); }
    setTimeout(function () { input.focus(); }, 50);
  }
  function close() { panel.classList.remove('open'); }

  async function send(text) {
    if (busy || !text.trim()) return;
    clearTimers();
    add('user', text); input.value = ''; autosize();
    busy = true; sendBtn.disabled = true;
    var t = document.createElement('div'); t.className = 'typing'; t.innerHTML = '<i></i><i></i><i></i>';
    log.appendChild(t); log.scrollTop = log.scrollHeight;
    try {
      var res = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sessionId: sessionId, message: text }) });
      var data = await res.json();
      t.remove();
      if (res.ok && data.reply) { add('amin', data.reply); armTimers(); }
      else add('note', "We couldn't send that. Please try again in a moment.");
    } catch (e) {
      t.remove(); add('note', "We couldn't connect. Please check your connection and try again.");
    } finally { busy = false; sendBtn.disabled = false; input.focus(); }
  }

  function autosize() { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 110) + 'px'; }
  input.addEventListener('input', autosize);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value); } });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!started) { started = true; add('amin', GREETING); }
    send(input.value);
  });
  root.querySelector('.bubble').addEventListener('click', function () { panel.classList.contains('open') ? close() : open(); });
  root.querySelector('.x').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  window.TMChat = { open: open, close: close };
})();
