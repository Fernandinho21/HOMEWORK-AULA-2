# 📱 UserCard Screen — Homework Aula 2

Projeto desenvolvido para a disciplina de **Programação para Dispositivos Móveis** da UNIESP.

**Docente:** Nicoly Figueredo Pessoa de Almeida  
**Assunto:** Introdução ao React Native

---

## 📋 Sobre o projeto

Aplicativo mobile construído com **React Native + Expo** que exibe uma tela de cards de usuários com interação de status online/offline.

---

## 🗂️ Estrutura do projeto

```
app/
  index.tsx         → Tela principal com lista de usuários
components/
  UserCard.tsx      → Componente reutilizável de card de usuário
```

---

## ⚙️ Funcionalidades

- Listagem de usuários com nome e profissão
- Componente `UserCard` reutilizável com props `nome` e `profissao`
- Controle de status **Offline → Online** com `useState`
- Botão para alternar o status de cada usuário individualmente
- Estilização moderna com tema escuro

---

## 🚀 Como rodar

### Pré-requisitos

- Node.js >= 20
- Expo Go instalado no celular

### Instalação

```bash
npm install
npx expo start
```

Escaneie o QR code com o app **Expo Go** no celular.

---

## 🛠️ Tecnologias

- React Native
- Expo
- TypeScript
