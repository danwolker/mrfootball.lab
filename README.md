# Mr Football Lab ⚽️

Este documento descreve como iniciar corretamente o projeto Mr Football Lab com frontend em React/Vite e backend em Python.

---

## 🧰 Requisitos do Sistema

Antes de iniciar, verifique se as tecnologias abaixo estão instaladas:

### ✔️ Backend
- [Python](https://www.python.org/) 3.13.2 (recomendado via `pyenv`)
- [Pipenv](https://pipenv.pypa.io/en/latest/)
- [Pyenv](https://github.com/pyenv/pyenv) para gerenciar versões do Python

### ✔️ Frontend
- [Node.js](https://nodejs.org/en/) LTS (preferencialmente instalado via `nvm`)
- [Yarn](https://yarnpkg.com/) (Berry v3 ou superior)
- [Corepack](https://nodejs.org/api/corepack.html) para gerenciar versões modernas do Yarn

---

## ⚙️ Verificação e Instalação das Ferramentas

### 🔹 Verificar versões instaladas

```bash
# Python
python --version

# pipenv
pipenv --version

# pyenv
pyenv --version

# Node
node -v

# npm
npm -v

# yarn
yarn -v
```

### 🔹 Instalar/Atualizar ferramentas (apenas caso necessário)

1.  Instalar pyenv (gerenciador de versões Python)
    ```
    curl https://pyenv.run | bash
    ```

2. Verificar se as linhas abaixo estão presentes no arquivo `~/.bashrc` ou `~/.zshrc` (ambientes Linux):
    ```
    export PYENV_ROOT="$HOME/.pyenv"
    export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init --path)"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"
    ```
    > **OBS:** Caso não estejam, adicione-as manualmente.

 3. Instalar pipenv (gerenciador de dependências Python)
    ```
    pip install pipenv
    ```

4. Instalar nvm (Node Version Manager)
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    source ~/.bashrc
    ```

5. Instalar Node.js LTS com nvm
    ```
    nvm install --lts
    nvm use --lts
    ```

6. Ativar corepack e instalar Yarn Berry
    ```
    corepack enable
    corepack prepare yarn@stable --activate
    ```

    > **OBS:** Após instalar o Yarn Berry, execute yarn set version berry dentro da pasta frontend/ caso necessário.
---

## 📌 Estrutura do Projeto

```
mrfootball_lab/
├── backend/    # Projeto backend (Python/Django)
└── frontend/    # Projeto React com Vite
```

---

# 🚀 Iniciando o Projeto

## 1. Backend (Python)

**Entre na pasta do backend:**

```bash
cd backend
```

**Instalar e utilizar versão do Python:**
```bash
pyenv install 3.13.2
pyenv local 3.13.2
```

**Criar o ambiente local com o Pipfile (instalando dependências):**
```bash
pipenv install
```

**Ativar ambiente virtual:**

```bash
pipenv shell
```

**Rodar o servidor backend:**

```bash
python3 manage.py runserver
```

> **OBS:** Sempre deixe o backend rodando antes de iniciar o frontend para evitar erros de comunicação entre API e cliente.

---

## 2. Executar Frontend (React/Vite)

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