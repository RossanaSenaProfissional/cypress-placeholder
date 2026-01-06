# cypress-placeholder

Projeto mínimo de automação de API com Cypress.

Pré-requisitos: Node.js 18+ e npm

Instalação:

```bash
npm install
```

Executar testes (headless):

```bash
npm run cy:run
```

Abrir Cypress (UI):

```bash
npm run cy:open
```

O arquivo de configuração está em `cypress.config.js` e o teste exemplo em `cypress/e2e/publicacoes.js`.

CI: existe um workflow em `.github/workflows/cypress.yml` que executa `npx cypress run` no GitHub Actions.
