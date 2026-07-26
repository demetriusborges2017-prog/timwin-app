# timwin PWA

Interface (a "cara") do timwin: chat mobile-first que fala com o cerebro no Make.
Nao tem regra de negocio; so coleta a pergunta, chama o webhook e mostra a resposta.

## Arquivos
- `index.html` - a pagina (UI + logica de chamar o webhook).
- `config.js` - UNICO lugar de configuracao (ver abaixo).
- `manifest.json` - metadados de app (nome, icones, cor).
- `sw.js` - service worker (torna instalavel e abre o shell offline).
- `icons/` - icones do app.

## Configuracao (config.js)
Todas as configuracoes ficam em `config.js`. Nao ha `.env`: isto e um site estatico,
sem build que leia variaveis de ambiente. Campos:

| Campo         | O que e                                              |
|---------------|------------------------------------------------------|
| `WEBHOOK`     | URL do webhook do Make (o cerebro).                  |
| `DISCIPLINA`  | disciplina da base carregada (hoje automacao-industrial). |
| `APP_NAME`    | nome exibido.                                        |
| `APP_VERSION` | versao (aparece no rodape).                          |
| `TIMEOUT_MS`  | tempo maximo de espera pela resposta (ms).           |

Regra: nunca colocar segredos (chaves de API) aqui. Isto e front-end e fica visivel
no navegador. O fechamento do acesso e a camada de token de usuario (LEIAME secao 9).

## Publicar (GitHub Pages)
1. Criar um repositorio PUBLICO (ex.: `timwin-app`). Nao usar o repo privado da base.
2. Subir o conteudo desta pasta na RAIZ do repo (index.html na raiz + a pasta icons).
3. Settings > Pages > Source: branch `main` / root.
4. Endereco: `https://<usuario>.github.io/timwin-app/`.
5. Opcional (subdominio proprio): Settings > Pages > Custom domain = `timwin.simplesfeito.com.br`
   e, no DNS do dominio, um CNAME `timwin` -> `<usuario>.github.io`.

## CORS (fazer no lancamento)
Hoje o webhook devolve `Access-Control-Allow-Origin: *` para permitir teste de
qualquer origem. Quando o dominio final estiver fixo, apertar para exatamente aquela
origem (ex.: `https://timwin.simplesfeito.com.br`) no modulo WebhookRespond do Make.

## Versao
0.1.0
