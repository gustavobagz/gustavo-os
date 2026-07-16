---
name: novo-cliente
description: Cadastra cliente novo da prática independente — cria o arquivo do cliente a partir do template e atualiza o índice. Usar quando Gustavo disser "cliente novo", "cadastra o cliente", ou mencionar um cliente que ainda não existe em Escritorio/Clientes/.
---

# /novo-cliente — cadastro

## Fluxo

1. **Coletar** (perguntar apenas nome + contato se for tudo que ele tiver; o resto é opcional):
   nome, PF/PJ, CPF/CNPJ, contato, origem (indicação, H2, orgânico…), modelo de honorários se já combinado.

2. **Criar** `Escritorio/Clientes/CL-xxx-nome-em-kebab.md` a partir de
   `Escritorio/Clientes/_template-cliente.md` (próximo ID sequencial `CL-xxx`,
   campo "Desde" = data de hoje).

3. **Indexar**: nova linha em `Escritorio/Clientes/INDEX.md`.

4. **Confirmar** em 2 linhas (ID criado + o que ficou pendente de preencher).

## Regras
- Verificar duplicidade pelo nome antes de criar.
- Dados sensíveis (CPF, contato) ficam apenas no arquivo do cliente, nunca no INDEX.
