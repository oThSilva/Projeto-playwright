# Buger Eats - Projeto de Automação

Este projeto implementa testes automatizados para o site Buger Eats utilizando Playwright e Cucumber, seguindo o padrão Page Object Model (POM).

## 📋 Requisitos

- Node.js (versão 14 ou superior)
- NPM

## 🛠️ Tecnologias utilizadas

- **Playwright**: Framework de automação para navegadores
- **Cucumber**: Ferramenta BDD (Behavior Driven Development)
- **TypeScript**: Linguagem de programação tipada baseada em JavaScript

## 🚀 Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/oThSilva/Projeto-playwright.git
   cd projeto
   ```

2. Instale as dependências:
   ```
   npm install playwright @playwright/test @cucumber/cucumber typescript ts-node
   ```

3. Instale os navegadores do Playwright:
   ```
   npx playwright install
   ```

## 📂 Estrutura do projeto

```
projeto/
├── features/           # Cenários de teste em Gherkin
├── steps/              # Implementação dos passos dos cenários
├── pages/              # Classes Page Object
├── helpers/            # Funções auxiliares
├── fixtures/           # Arquivos para upload nos testes
├── screenshots/        # Screenshots capturados durante os testes
├── constants.ts        # Constantes e seletores
├── cucumber.js         # Configuração do Cucumber
├── package.json        # Dependências do projeto
└── tsconfig.json       # Configuração do TypeScript
```

## ⚙️ Configuração

O projeto já está configurado para executar os testes. Se necessário, você pode ajustar os dados de teste no arquivo `constants.ts`.

## 🧪 Execução dos testes

Para executar os testes:

```
npm test
```

## 📊 Relatórios

Os relatórios são gerados nos seguintes formatos:
- **HTML**: `cucumber-report.html` 
- **Screenshots**: Armazenados na pasta `screenshots/`
- **Vídeos**: Armazenados na pasta `videos/`

## 🧩 Cenários implementados

1. **TC 01 - Register a user on the Buger Eats website**
   - Given that the user is on the Burger Eats page
   - When all fields are filled in correctly
   - Then the registration is successful

## 📝 Personalização

Para adicionar novos cenários:
1. Crie um novo arquivo `.feature` na pasta `features/`
2. Implemente os passos no arquivo correspondente em `steps/`
3. Se necessário, adicione novos métodos nas classes Page Object em `pages/`

## ⚠️ Observações

- O teste está configurado para não rodar em modo headless, permitindo visualizar a execução
- As capturas de tela são tiradas em momentos importantes do fluxo para facilitar a depuração

