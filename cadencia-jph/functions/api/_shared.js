export function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}

export async function forward(request, env, url, payload) {
  if (!url) return json({ error: 'INTEGRACAO_NAO_CONFIGURADA' }, 503);
  const body = { ...payload, gateway_secret: env.HISTORY_SECRET || env.BASE_SECRET };
  const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const text = await r.text();
  let data; try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return json(data, r.status);
}

export async function forwardVision(request, env, payload) {
  if (!env.VISION_WEBHOOK) return json({ error: 'INTEGRACAO_NAO_CONFIGURADA' }, 503);
  const body = { ...payload, gateway_secret: env.VISION_SECRET || env.HISTORY_SECRET, consentimento: true };
  const r = await fetch(env.VISION_WEBHOOK, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const text = await r.text(); let data; try { data = JSON.parse(text); } catch { data = { raw: text }; }
  return json(data, r.status);
}

