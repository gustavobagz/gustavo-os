---
name: novo-caso
description: Intake de caso novo da prática independente — coleta os dados essenciais, registra em Escritorio/Peticoes/casos.md, vincula (ou cria) o cliente e cadastra prazos. Usar quando Gustavo disser "caso novo", "entrou um caso", "abri um processo", "fui contratado para", ou informar dados de um processo/demanda nova fora da H2.
---

# /novo-caso — intake estruturado

## Fluxo

1. **Coletar** (perguntar só o que faltar; nunca travar o fluxo por campo não essencial):
   - Cliente (nome; se já existir em `Escritorio/Clientes/INDEX.md`, vincular; senão, rodar o fluxo de `/novo-cliente` embutido)
   - Tipo do caso (cobrança, execução, trabalhista, consumidor, vestibular, societário, eleitoral, regulatório-saúde)
   - Comarca/vara e nº do processo (se já ajuizado)
   - Valor da causa / valor em cobrança
   - Prazos já conhecidos (data-limite + providência)
   - Honorários combinados (modelo e valor)

2. **Registrar**:
   - Nova linha em `Escritorio/Peticoes/casos.md` (tabela "Casos ativos"), com próximo ID sequencial `C-xxx`
   - Prazos na tabela "Prazos" do mesmo arquivo
   - Honorários em `Escritorio/Financeiro/honorarios.md` ("A receber")
   - Atualizar o arquivo do cliente (seção "Casos vinculados") e o `INDEX.md`

3. **Sugerir próximo passo** (uma linha, sem executar sem pedir):
   - Cobrança/execução → oferecer `/peticao-execucao`
   - Caso sem contrato de honorários formalizado → oferecer `/proposta-honorarios`

4. **Confirmar** com um resumo de 5 linhas do que foi registrado.

## Regras
- IDs sequenciais: olhar o maior ID existente e incrementar.
- Datas AAAA-MM-DD nos registros; exibir DD/MM/AAAA nas conversas.
- Aplicar as convenções do CLAUDE.md (requerente/requerida etc.) em qualquer minuta derivada.
