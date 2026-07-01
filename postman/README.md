# Postman — Squad-X | Climbe

Coleção que cobre toda a Climbe API (9 pastas, 38 requests).

## Importar

1. Postman → **Import** → arraste `Squad-X-Climbe.postman_collection.json`.
2. Isso cria a collection **Squad-X | Climbe** já com as pastas e requests.
   Se você já tinha criado uma collection vazia com esse nome, apague a vazia.

## Usar

1. Em **Variables** da collection, confira `base_url` (padrão `http://localhost:8000`)
   e ajuste `admin_email` / `admin_password` conforme o seu `.env`.
2. Rode **Auth → Login**. O token é salvo em `access_token` automaticamente e
   todos os outros requests herdam o `Bearer`.
3. Ajuste os `id_*` (ex.: `id_empresa`, `id_proposta`) para apontar os recursos
   que você quer manipular nos endpoints com path param.

## Regenerar

Quando a API mudar, atualize `generate_collection.py` e rode:

```bash
python docs/postman/generate_collection.py
```
