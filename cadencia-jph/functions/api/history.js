import { forward, json } from './_shared.js';

export async function onRequestGet({ request, env }) {
  const url = env.HISTORY_READ_WEBHOOK;
  if (!url) return json({ error: 'INTEGRACAO_NAO_CONFIGURADA' }, 503);
  const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ gateway_secret: env.HISTORY_SECRET }) });
  const text = await r.text(); let data; try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return json(data, r.status);
}

export async function onRequestPost({ request, env }) {
  let payload; try { payload = await request.json(); } catch { return json({ error: 'JSON_INVALIDO' }, 400); }
  if (!payload.evento_id || !payload.id_contato || !payload.evento) return json({ error: 'EVENTO_INCOMPLETO' }, 400);
  return forward(request, env, env.HISTORY_WRITE_WEBHOOK, payload);
}

