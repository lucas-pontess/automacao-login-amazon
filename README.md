# Automação de Testes — Login Amazon

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Projeto de automação de testes web da tela de login da Amazon, desenvolvido com **Playwright** e o padrão **Page Object Model (POM)**.

## Tecnologias

- [Playwright](https://playwright.dev/) — framework de automação web
- [TypeScript](https://www.typescriptlang.org/) — linguagem tipada baseada em JavaScript
- [Node.js](https://nodejs.org/) — ambiente de execução

## Estrutura de Pastas

```
src/
├── pages/      → Page Objects (uma classe por tela)
├── tests/      → Cenários de teste
├── fixtures/   → Dados de teste
└── helpers/    → Funções utilitárias
```

## Como executar

```bash
# Instalar dependências
npm install

# Rodar todos os testes
npx playwright test

# Rodar com relatório visual
npx playwright test --reporter=html
```

## Autor

Lucas Pontes
