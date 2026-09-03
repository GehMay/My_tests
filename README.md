# 📚☕ Pandora Livraria & Café

Um projeto de estudo Full-Stack focado no desenvolvimento de um sistema web completo para uma livraria aconchegante que possui um espaço de cafeteria integrado. 

Este projeto foi construído do zero, **sem o uso de frameworks complexos**, com o objetivo principal de aprender e consolidar os fundamentos da web (Manipulação do DOM, requisições HTTP, modelagem de banco de dados e estilização estrutural).

## 🎯 Objetivo do Projeto (Produto Final)
O sistema final permitirá que os clientes naveguem pelo acervo da loja, vejam os lançamentos, descubram promoções (tanto de livros quanto de cafés e combos) e façam login para reservar obras e retirar na loja física. Além disso, contará com um painel administrativo para controle interno do estoque e cadastro de novas campanhas.

## 🛠️ Tecnologias Utilizadas
* **Front-end:** HTML5, CSS3 puros (Grid e Flexbox) e Vanilla JavaScript.
* **Back-end:** Node.js (utilizando apenas os módulos nativos como `http` e `fs`, sem frameworks como Express, para aprofundamento técnico).
* **Banco de Dados:** MySQL (relacional).

## 🚀 Funcionalidades do Sistema

### 🟢 O que já está sendo implementado no momento (MVP)
- [x] **Vitrine Dinâmica:** Renderização de lançamentos alimentados diretamente pelo banco de dados MySQL usando a tag `<template>` do HTML e manipulação segura via JavaScript.
- [x] **API Backend:** Servidor próprio capaz de hospedar arquivos estáticos e prover rotas RESTful de dados.
- [x] **Interface Gráfica:** Design responsivo e limpo baseado no conceito de *Cards*.
- [x] **Modelagem de Dados:** Criação do modelo relacional inicial da loja.

### 🟡 O que está no Roadmap (Próximos Passos)
- [ ] **Seção de Promoções:** Integração com o back-end para exibir campanhas ativas baseadas na data atual.
- [ ] **Seção de Destaques:** Lógica de negócio para exibir livros baseados nas maiores avaliações e número de vendas.
- [ ] **Sistema de Login e Autenticação:** Cadastro de clientes e administradores com senhas protegidas e criptografadas.
- [ ] **Sistema de Reservas:** Interface para o usuário autenticado selecionar livros para retirada presencial.
- [ ] **Painel Administrativo (`painel-admin.html`):** Área restrita para funcionários gerenciarem o estoque e as promoções.

## 📂 Estrutura do Projeto

Abaixo está o mapa para você se encontrar dentro dos arquivos do projeto:

```text
📁 Raiz
 ├── 📁 CSS
 │    └── 📄 style.css              # Estilos visuais da página
 ├── 📁 JS
 │    └── 📄 lancamento.js          # Lógica frontend (consumo das APIs)
 ├── 📁 dados
 │    └── 📄 *.json                 # Arquivos temporários (fallback)
 ├── 📁 database
 │    └── 📄 setup.sql              # Script oficial de criação do Banco de Dados
 ├── 📄 index.html                  # Página inicial da loja
 ├── 📄 servidor-estatico.js        # Backend (Servidor Node.js e rotas de API)
 ├── 📄 GUIA-SERVIDOR.md            # Documentação técnica de como o Node funciona
 └── 📄 README.md                   # Esta documentação
```

## 💻 Como Rodar o Projeto Localmente

1. **Configuração do Banco de Dados:**
   * Abra o MySQL Workbench.
   * Abra e execute o arquivo `database/setup.sql` que está na raiz do projeto. Ele vai criar o schema `pandora_livraria` e popular com dados de teste.
2. **Configuração do Servidor:**
   * Abra o arquivo `servidor-estatico.js` e atualize as variáveis da conexão MySQL (usuário e senha) para corresponderem ao seu ambiente local.
3. **Execução:**
   * No terminal do seu editor, instale o driver do banco rodando: `npm install mysql2`.
   * Inicie o servidor executando: `node servidor-estatico.js`.
   * Abra seu navegador e acesse: `http://localhost:5500`.

---
*Desenvolvido com dedicação por Geovana como projeto prático de aprimoramento em Desenvolvimento Web Full-Stack.*
