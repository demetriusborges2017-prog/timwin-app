import { forwardVision, json } from './_shared.js';

export async function onRequestPost({ request, env }) {
  let payload; try { payload = await request.json(); } catch { return json({ error: 'JSON_INVALIDO' }, 400); }
  if (payload.consentimento !== true || !payload.image_base64 || !payload.mime) return json({ error: 'CONSENTIMENTO_E_IMAGEM_NECESSARIOS' }, 400);
  if (!['image/png','image/jpeg','image/webp'].includes(payload.mime) || payload.image_base64.length > 6_000_000) return json({ error: 'IMAGEM_INVALIDA' }, 400);
  return forwardVision(request, env, payload);
}

