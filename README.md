# squad-x-docs

Portal de documentação da **Squad-X / Climbe** — apresentação, specs da API e coleção Postman, publicados via **GitHub Pages**.

🔗 **No ar:** `https://marcos-grocha.github.io/squad-x-docs/`

## Conteúdo

| Rota | O que é |
|---|---|
| [`/`](index.html) | Portal (landing) com links para tudo |
| [`/apresentacao/`](apresentacao/index.html) | Deck do que o squad entregou, com vídeo da demo e créditos |
| [`/api/`](api/index.html) | Documentação das 8 capabilities do backend (specs) |
| [`/postman/`](postman/index.html) | Coleção Postman da API (importar + baixar) |

## Estrutura

```
squad-x-docs/
├── index.html              # portal
├── apresentacao/
│   ├── index.html          # o deck
│   ├── demo.mp4            # vídeo da demo (comprimido, ~3 MB)
│   └── fotos/              # fotos dos participantes
├── api/                    # specs geradas a partir do climbe-api
├── postman/                # coleção + página de instruções
└── .nojekyll               # serve os arquivos como estáticos puros
```

## Publicar (GitHub Pages)

1. Criar o repositório `squad-x-docs` no GitHub e dar push do conteúdo.
2. **Settings → Pages → Source:** *Deploy from a branch* → `main` / `/ (root)`.
3. Aguardar o deploy. O site fica em `https://<user>.github.io/squad-x-docs/`.

> O repositório precisa ser **público** (ou conta GitHub Pro para Pages privado).

## Atualizar a documentação da API

As specs são **geradas** no repositório `climbe-api` (fonte da verdade em `openspec/`).
Para atualizar aqui:

```bash
# no climbe-api
python docs/generate_spec_docs.py
# copiar a saída docs/specs/* para squad-x-docs/api/
```

## Origem dos artefatos

- **Apresentação e vídeo** — deste squad.
- **Specs (`api/`)** — geradas por `climbe-api/docs/generate_spec_docs.py`.
- **Postman** — `climbe-api/docs/postman/`.
