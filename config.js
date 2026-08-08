/* timwin - configuracao da PWA.
   ESTE E O UNICO LUGAR para mudar endereco do webhook, disciplina e versao.
   Observacao: isto e front-end, entao estes valores ficam visiveis no navegador.
   Isso e esperado no MVP; o fechamento do acesso e a camada de token do usuario
   (ver LEIAME secao 9). Nunca coloque segredos (chaves de API) aqui.

   ATUALIZADO 01/08/2026: webhook trocado para o cerebro v2 (classificacao
   automatica + conversa conduzida, cenario Make 5827250). O webhook antigo
   (2620313, cerebro 5766211) foi desativado. Ver LEIAME_Construcao_Make_timwin.md
   secao 5c e 6 para o contrato novo.

   ATUALIZADO 03/08/2026: cerebro v1.4 - a resposta do Make agora pode trazer
   blocos ocultos ###SUGERIR_TROCA### (sugestao de troca de metodologia, so
   aplicada com confirmacao do vendedor) e ###ESTADO### (Estado Conversacional,
   reenviado junto do historico como ###ESTADO_ATUAL### para o Make nao perder
   contexto, sem chamada extra a OpenAI). Ver PWA/index.html,
   handleConfirmadoResponse/buildHistoricoEnvio/offerTrocaMetodologia.

   ATUALIZADO 03/08/2026 (correcao de bug real de teste): cerebro v1.7 - a
   ordem dos blocos ocultos mudou para blindar contra corte por limite de
   tokens: ###SUGESTOES### (baloes, visiveis/clicaveis) agora vem ANTES de
   ###ESTADO### (invisivel); se a resposta for cortada, o Estado e a vitima,
   nunca os Baloes. handleConfirmadoResponse atualizado para a nova ordem.

   ATUALIZADO 03/08/2026 (auditoria dos baloes, cerebro v1.8): adicionado um
   console.log TEMPORARIO em handleConfirmadoResponse com o texto CRU recebido
   do Make, antes de qualquer parsing - serve so para diagnostico (ver
   AFAZER_ESTRATEGICO_timwin.md e LEIAME secao 6, bloco desta rodada). Remover
   depois que a causa raiz dos baloes ausentes for confirmada.

   ATUALIZADO 08/08/2026 (Consolidacao Operacional, cerebro v1.11): Gates
   Metodologicos + Subgates (vocabulario fechado no ###ESTADO###, sem chamada
   extra) e Pratica Guiada ao Concluir um Gate. PWA: fix do botao Enviar que
   ficava desabilitado apos o 1o turno em "confirmado"; fix do scroll do painel
   lateral no mobile; "Relatorio" renomeado para "Resumo" (botao, mensagens,
   nome do arquivo exportado no Make); disclaimer discreto de IA no rodape. */
window.CONFIG = {
  WEBHOOK: "https://hook.us2.make.com/9vcpo34o2scmp4cakjvtb9a5h7k1ugig",
  DISCIPLINA: "automacao-industrial",
  APP_NAME: "timwin",
  APP_VERSION: "0.9.0",
  TIMEOUT_MS: 40000
};
