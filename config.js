/* timwin - configuracao da PWA.
   ESTE E O UNICO LUGAR para mudar endereco do webhook, disciplina e versao.
   Observacao: isto e front-end, entao estes valores ficam visiveis no navegador.
   Isso e esperado no MVP; o fechamento do acesso e a camada de token do usuario
   (ver LEIAME secao 9). Nunca coloque segredos (chaves de API) aqui. */
window.CONFIG = {
  WEBHOOK: "https://hook.us2.make.com/2d29vpdk9tc4reoqkfi90ljjsa2xoiyu",
  DISCIPLINA: "automacao-industrial",
  APP_NAME: "timwin",
  APP_VERSION: "0.1.0",
  TIMEOUT_MS: 40000
};
