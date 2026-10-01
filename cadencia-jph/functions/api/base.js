import { json } from './_shared.js';

export async function onRequestGet({ request, env }) {
  const q = new URL(request.url).searchParams.get('q') || '';
  if (!env.BASE_WEBHOOK) return json({ error: 'INTEGRACAO_NAO_CONFIGURADA' }, 503);
  const r = await fetch(env.BASE_WEBHOOK, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ gateway_secret: env.BASE_SECRET, q }) });
  const text = await r.text();
  let data; try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return json(data, r.status);
}

