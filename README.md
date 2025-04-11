# Buger Eats - Projeto de Automação

Este projeto implementa testes automatizados para o site Buger Eats utilizando Playwright e Cucumber, seguindo o padrão Page Object Model (POM).

## 🛠️ Tecnologias utilizadas

- **Playwright**: Framework de automação para navegadores
- **Cucumber**: Ferramenta BDD (Behavior Driven Development)
- **TypeScript**: Linguagem de programação tipada baseada em JavaScript

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

## 📊 Relatórios

Os relatórios são gerados nos seguintes formatos:
- **HTML**: `cucumber-report.html` (quando executado com `npm run test:report`)
- **Screenshots**: Armazenados na pasta `screenshots/`
- **Vídeos**: Armazenados na pasta `videos/` (uma gravação para cada teste)

## 🧩 Cenários implementados

1. **TC 01 - Register a user on the Buger Eats website**
   - Given that the user is on the Burger Eats page
   - When all fields are filled in correctly
   - Then the registration is successful



