# AGENTS.md — TrendSnap

## 1. Visão geral
Micro-SaaS Node + React que recomenda horários/hashtags para Threads.

## 2. Ambiente
- Node 18 LTS
- Yarn 4
- Docker disponível.

## 3. Build & Run
```bash
yarn install          # instala deps  
yarn test             # roda Jest  
yarn dev              # inicia API + Front
```

4. Testes obrigatórios
Cobertura mínima 90 %.

Use Jest + Supertest p/ rotas.

5. Padrões de código
ESLint + Prettier config em .config/.

Sem any; prefira tipos utilitários TS.

Nomes: camelCase p/ vars, PascalCase p/ comps React.

6. Segurança
Sempre sanitizar entrada (lib express-validator).

Bloquear XSS e CSRF (helmet).

Proibido armazenar secrets em repo; use .env.

7. Fluxo de PR
Crie branch feat/<ticket> ou fix/<bug>.

Abra PR contra main com:

Descrição → what / why / how

Checklist de testes passando

Marque @bruno-review.

8. Não faça
Não force-push em main.

Não altere arquivos fora de src/ sem autorização.

Não instale libs sem justificar no PR.

9. Exemplos de tarefas
Code: “Implemente rota GET /trending seguindo contrato OpenAPI em docs/api.yml e escreva teste 95 % cobertura.”
Ask: “Quais funções têm complexidade ciclomática > 15?”

10. Atualização deste arquivo
Inclua mudanças de convenções em todo novo release.


---

#### O que mais acrescentar

| Se precisar… | Adicione nos blocos |
|--------------|---------------------|
| **Múltiplas stacks** | subseções por diretório (ex.: “/api”, “/web”). |
| **Guia de estilo avançado** | link para `STYLEGUIDE.md` + examples. |
| **Perfis de agente** | separe seções `Codex:frontend` / `Codex:backend`. |
| **Automação de CI** | comandos para pipeline (`yarn ci`, `docker build`). |

---

##### Dicas finais

1. Comece minimalista e deixe o Codex sugerir updates (ele mesmo pode editar o AGENTS.md). :contentReference[oaicite:1]{index=1}  
2. Mantenha tudo versionado – todo dev humano lerá também. :contentReference[oaicite:2]{index=2}  
3. Coloque exemplos de **Do/Don’t** e prompts reais para reduzir ambiguidade. :contentReference[oaicite:3]{index=3}

Com esse template o agente já começa entendendo seu projeto, segue seu estilo e evita surpresas.
::contentReference[oaicite:4]{index=4}
