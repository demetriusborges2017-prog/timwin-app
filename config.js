/* timwin - configuracao da PWA.
   ESTE E O UNICO LUGAR para mudar endereco do webhook, disciplina e versao.
   Observacao: isto e front-end, entao estes valores ficam visiveis no navegador.
   Isso e esperado no MVP; o fechamento do acesso e a camada de token do usuario
   (ver LEIAME secao 9). Nunca coloque segredos (chaves de API) aqui.

   ATUALIZADO 01/08/2026: webhook trocado para o cerebro v2 (classificacao
   automatica + conversa conduzida, cenario Make 5827250). O webhook antigo
   (2620313, cerebro 5766211) foi desativado. Ver LEIAME_Construcao_Make_timwin.md
   secao 5c e 6 para o contrato novo. */
window.CONFIG = {
  WEBHOOK: "https://hook.us2.make.com/9vcpo34o2scmp4cakjvtb9a5h7k1ugig",
  DISCIPLINA: "automacao-industrial",
  APP_NAME: "timwin",
  APP_VERSION: "0.5.0",
  TIMEOUT_MS: 40000
};
