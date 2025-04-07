# 🧩 Taskly

Taskly é uma aplicação de gerenciamento de tarefas com autenticação, sistema de prioridades, status de conclusão e integração com React Hook Form, Yup, React Query e Styled Components.

## ⚙️ Tecnologias Utilizadas

- **React**
- **React Router DOM**
- **React Hook Form**
- **Yup**
- **Styled Components**
- **React Query (TanStack)**
- **TypeScript**
- **Vite**
- **Notistack**
- **Date-fns**
- **React DatePicker**

---

## 🚀 Funcionalidades

- ✅ Login com autenticação JWT
- ✅ Armazenamento seguro do token no localStorage
- ✅ Criação, edição e exclusão de tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Priorização de tarefas (Alta, Média, Baixa)
- ✅ Validação de formulários com Yup
- ✅ Data de entrega usando DatePicker
- ✅ Interface responsiva e moderna

---

## 🧑‍💻 Como rodar o projeto

### Pré-requisitos

- Node.js (v18+)
- Yarn ou NPM

### Clonando o projeto

```bash
git clone git@github.com:r2brito/taskly-web.git
cd taskly-web
```

### Instalando dependências

```bash
# com npm
npm install

# ou com yarn
yarn install
```

### Instalando dependências

```bash
# com npm
npm run start

# ou com yarn
yarn start
```

### Estrutura de Pastas

```bash
src/
├── api/                    # Configuração do Axios + interceptors
├── components/             # Componentes reutilizáveis
├── domain/                 # Lógica de domínio (auth, tarefas, etc)
├── guards/                 # Responsável por proteger rotas, como verificação de autenticação.
├── infra/                  # infraestrutura da aplicação: integração com libs como React Query, armazenamento, etc.
├── layouts/                # Estrutura visual comum entre páginas (ex: headers, sidebars, containers).
├── pages/                  # Páginas principais da aplicação, como login, cadastro e painel de tarefas.
├── routes/                 # Arquivos de configuração e gerenciamento de rotas.
├── sections/               # Seções especificas da aplicação.
├── services/               # Serviços globais como contextos (ex: autenticação, armazenamento).
├── theme/                  # Tema visual e estilos globais da aplicação usando styled-components.
├── validations/            # Schemas Yup usados para validação de formulários.
└── App.tsx                 # Root da aplicação
```
