# Mr Football Lab ⚽️

Este documento descreve como iniciar corretamente o projeto Mr Football Lab com frontend em React/Vite e backend em Python.

---

## 📌 Estrutura do Projeto

```
mrfootball_lab/
├── backend/    # Projeto backend (Python/Django)
└── frontend/    # Projeto React com Vite
```

---

## 🚀 Iniciando o Projeto

### 1. Backend (Python)

**Entre na pasta do backend:**

```bash
cd backend
```

**Ativar ambiente virtual:**

```bash
source env/bin/activate
```

**Instalar dependências (se necessário):**

```bash
pip install -r requirements.txt
```

**Rodar o servidor backend:**

```bash
python manage.py runserver
```

> **OBS:** Sempre deixe o backend rodando antes de iniciar o frontend para evitar erros de comunicação entre API e cliente.

---

### 2. Executar Frontend (React/Vite)

Abra outro terminal e vá até a pasta frontend:

```bash
cd frontend
```

**Instale dependências (se necessário):**

```bash
yarn install
```

**Inicie o frontend:**

```bash
yarn dev
```