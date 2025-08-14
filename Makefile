# Makefile para automação de tarefas do projeto
# Uso no Windows (PowerShell): usar `make alvo` se make estiver instalado (via mingw32-make ou make do git).
# Alternativa: npm run <script> equivalente.

SHELL := /usr/bin/env bash

# ======================= Variáveis =======================
SRC_EXT=js,jsx,ts,tsx

# ======================= Metas ===========================
.PHONY: help install validate lint lint-fix format format-check type-check build dev clean prepare hooks test ci

help:
	@echo "Alvos disponíveis:"
	@grep -E '^[a-zA-Z_-]+:.*?##' Makefile | sed -E 's/:.*?##/\t- /'

install: ## Instala dependências (npm ci se existir package-lock, senão npm install)
	@if [ -f package-lock.json ]; then npm ci; else npm install; fi

prepare: ## Instala hooks husky
	npm run prepare

hooks: ## Reinstala hooks (caso .husky seja removida)
	rm -rf .husky || true
	npm run prepare
	 npx husky add .husky/pre-commit "npm run pre-commit-hook"
	 npx husky add .husky/commit-msg "npx --no -- commitlint --edit $$1"

lint: ## Roda ESLint
	npm run lint

lint-fix: ## ESLint com --fix
	npm run lint:fix

format: ## Formata com Prettier
	npm run format

format-check: ## Verifica formatação
	npm run format:check

type-check: ## Verificação de tipos TS
	npm run type-check

validate: ## Lint + Types + Prettier check
	npm run validate

build: ## Build de produção
	npm run build

dev: ## Ambiente de desenvolvimento
	npm run dev

clean: ## Remove artefatos de build
	rm -rf .next

ci: ## Passos para CI (instala, valida e build)
	$(MAKE) install
	$(MAKE) validate
	$(MAKE) build

# Hook composto
pre-commit-hook: ## Executa lint-staged e type-check para hook
	npx lint-staged
	npm run type-check
