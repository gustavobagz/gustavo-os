# Livro de Registro de Ações Nominativas — H2 S.A. (controle)

> **Como usar (Claude):** registro vivo do cap table da H2 S.A. e das movimentações
> (entrada/saída de médico-acionista) entre uma versão fechada do livro e a
> próxima. Toda vez que um médico compra, vende ou devolve ações, lançar uma
> linha na tabela de movimentações ANTES de fechar a próxima versão do livro —
> nunca deletar uma linha antiga, só adicionar.

## Por que este arquivo existe
A H2 S.A. mantém o Livro de Registro de Ações Nominativas em formato digital
(facultado pelo art. 100, §3º, Lei 6.404/76 c/c IN DREI nº 82/2021) e o
reemite periodicamente como um "snapshot" fechado (Termo de Encerramento),
arquivando a versão anterior. Isso é válido, mas **não substitui** o
Livro de Transferência de Ações Nominativas (art. 100, II) — o controle formal
de cada operação individual. Este arquivo cobre esse gap: registra cada
entrada/saída conforme ela acontece, para que a próxima versão do livro possa
ser fechada com rastreabilidade completa (e para servir de prova em eventual
fiscalização/disputa societária/due diligence).

## Versões fechadas do livro
| Data de fechamento | Nº acionistas | Nº ações | Arquivo | Observação |
|---------------------|---------------|----------|---------|------------|
| 2025-02-28 | ~700 (não fechado formalmente — controle digital contínuo) | — | `LIVRO DE REGISTRO DE AÇÕES ATÉ 28-02-2025.pdf` | assinado por Jair (sócio presidente) + Wellington (MedFiscal, contador) — **única versão com respaldo contábil real até hoje** |
| ~~2026-05-19~~ | ~~1.393~~ | ~~16.810~~ | `Livro_Registro_Acoes_Nominativas_H2_SA_19052026.pdf` | **DESCARTADA (2026-07-21)** — Gustavo confirmou que essa versão foi montada com Claude numa sessão anterior e nunca foi levada à contabilidade/Guilherme. Não usar como referência. Substituída pela reconstrução abaixo. |
| 2026-07-21 (minuta, não fechada) | 2.232 | 23.170 | `2026-07-21-MINUTA-livro-acionistas-reconstruido.xlsx` / `.pdf` | Reconstruída do zero a partir do livro de 28/02/2025 (única base confiável) + todos os Termos de Adesão/Saída confirmados na `TERMOS SA.xlsx` + CPF/CNPJ cruzado com 5 fontes (ver metodologia abaixo). **Ainda não é o livro oficial** — falta CPF/CNPJ de 533 pessoas e algumas pendências pontuais (ver double-check abaixo). |

## Movimentações (entradas/saídas) — lançar a cada operação

### Histórico reconstituído (2026-07-20, a partir de `TERMOS SA.xlsx`)
As 76 saídas abaixo têm Termo de Saída confirmado (status Arquivado/Registrado)
na planilha de controle da H2 (`TERMOS SA.xlsx`, aba "Termos de Saída SA"),
todas anteriores a fev/2025. Conferidas uma a uma por nome contra o livro
atual (19/05/2026): **nenhuma consta hoje no livro** — bom sinal, indica que
a baixa foi feita corretamente antes da consolidação. A planilha de saída não
tem coluna de CPF, então a conferência foi só por nome — recomenda-se
conferência pontual se qualquer uma dessas pessoas reaparecer no livro no
futuro.

| Data | Nome / Razão social | Unidade | Tipo | Status termo |
|------|----------------------|---------|------|---------------|
| 2024-05-12 | DANIELA BRUNA MARTINS ABREU | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-06-03 | NATÃ LOPES FERNANDES | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-06-05 | AMANDA DE MORAES RIBEIRO LEITE | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-06-06 | RENAN IVO HORTA ALVARENGA | HEI | saída | ARQUIVADO |
| 2024-06-06 | ALOISIO DE FREITAS JORGE JUNIOR - FREITAS MEDICINA E SAUDE LTDA | HRDLEM | saída | ARQUIVADO |
| 2024-06-06 | RICARDO CARDOSO MENEZES - RODRIGO E MENEZES SERVICOS MEDICOS LTDA | HRDLEM | saída | ARQUIVADO |
| 2024-06-06 | GABRIELA ASSUNÇÃO GODINHO | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-03 | PAULA ALVES FERREIRA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-07-15 | DANIELLA COIMBRA CORDEIRO | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-19 | RONALDO DE CASTRO TAVARES - CASTRO E TAVARES PRESTACAO DE SERVICOS LTDA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-07-19 | ISABELLA GOMES ALVES | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-22 | LUÍS FELIPE PIRES FONTANA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-22 | CÁSSIO RANIERE CARDOSO DOS SANTOS | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-22 | CANTIONIL ALVES BORGES NETO | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-23 | LARISSA JACOB RAKOWSKI | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-23 | LUCAS GOMES DE SOUZA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-25 | ANNA KARLLA GOMES MOREIRA - GMF ATIVIDADES MEDICAS LTDA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-25 | BRUNA MARQUES VILARINHO | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-07-26 | LUCAS FELIPE SILVA PINA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-08-02 | ULISSES TAVARES DE ARRUDA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-08-05 | MARÍLIA LORENA SOUSA CARVALHO | HRP | saída | ARQUIVADO |
| 2024-08-07 | GABRIELA COSTA SANTOS | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-08-10 | DRIELE CUNHA DE PAIVA ALMEIDA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-08-12 | JULLYANA RICELLY DIAS SILVA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-08-14 | LARISSA MELLO BRANDÃO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-08-15 | LORENA TASSARA QUIRINO VIEIRA - LTQV SERVIOCOS MEDICOS LTDA | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-08-15 | ALICE ALVES RESENDE DORNELES | REGIÃO NOROESTE | saída | ARQUIVADO |
| 2024-09-16 | LETICIA LINO DA SILVA - LETICIA LINO DA SILVA SERVICOS MEDICOS LTDA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-09-17 | LARISSA PIRES LEITE BRINGEL | HESLMB | saída | REGISTRADO |
| 2024-09-20 | VALDECI JUSTINO DA SILVA JUNIOR | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-09-22 | IGOR PINHEIRO LIMA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-02 | GILENE LUIZA DE OLIVEIRA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-09 | DAYTON DOUGLAS DA SILVA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-09 | ANTONIA VAZ MESSIAS LOPES | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-09 | BRUNA SPILBORGHS HAUN AMARAL TEIXEIRA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-21 | ÁUREA GOMES PIDDE | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-31 | INAJÁ DE FIGUEIREDO MARTINS ESCARIÃO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-31 | BRUNA MORAIS CORDEIRO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-10-31 | LAURA ROHLFS TAQUARY | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-02 | MARIANA AKEMY LOPES IUASSE | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-02 | WILLIAM BORGES DE MENEZES FILHO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-04 | ANA CAROLINA TOCANTINS ALBUQUERQUE | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-04 | GABRIELA ALVES LOUZADA FLÁVIO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-04 | PABLINY STEFANY DE LIMA GOMES | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-05 | CYNTHIA NICHIGAKI SERICAKU | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-05 | GUILHERME AUGUSTO DA COSTA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-05 | MARCOS ANTONIO DA SILVA JUNIOR | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-06 | GABRIELA MILHOMEM FERREIRA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-06 | LETÍCIA DIAS FARIA NAVA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-07 | MAURO MOREIRA MARQUES | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-07 | JULIANA VERAS DE MESQUITA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-13 | FERNANDA MOURA VIANA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-15 | CARLA CRISTINA FERREIRA COSTA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-18 | BRUNA DE CASTRO OLIVEIRA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-19 | RENATA BUENO BUCCI PY | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-19 | GUSTAVO MACHADO TRIGUEIRO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-22 | SAYONARA DA SILVA PANIAGO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-27 | EDUARDO MENDES STOFFELS | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-27 | ISABELA COSTA BORGES | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-11-28 | ÉRICA LOPES CASTILHO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-02 | THIAGO MARÇAL COSTA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-09 | EDUARDA VIANA TRAJANO | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-11 | CHRISTE ELLEN BATISTA FANZLAU | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-11 | YAN IKEDA FONSECA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-13 | FILIPPE FERREIRA MORAIS | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-16 | ADMILSON BARBOSA QUEIROS | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-19 | KAROLINNE KASSIA SILVA BARBOSA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-19 | ITALO LEONEL FERNANDES SILVA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2024-12-27 | KAROLINNE KASSIA SILVA BARBOSA | USF ALTO DO VALE | saída | REGISTRADO |
| 2024-12-27 | ITALO LEONEL FERNANDES SILVA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2025-01-14 | LUCAS SOARES TEIXEIRA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2025-01-14 | LUCAS PARESOTO - L T L PARESOTO SERVICOS MEDICOS LTDA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2025-01-21 | LÚCIO MOREIRA | REGIÃO NOROESTE | saída | REGISTRADO |
| 2025-01-21 | MARIANA RODRIGUES NEVES | REGIÃO NOROESTE | saída | REGISTRADO |
| 2025-01-23 | DANIELA PEREIRA ESPANÃ | REGIÃO NOROESTE | saída | REGISTRADO |
| 2025-02-05 | AMANDA TATIELE CARNEIRO ALVES | REGIÃO NOROESTE | saída | REGISTRADO |

*(KAROLINNE KASSIA SILVA BARBOSA e ITALO LEONEL FERNANDES SILVA aparecem
duas vezes na planilha original, com datas próximas — provável duplicidade
de lançamento na `TERMOS SA.xlsx`, não corrigida aqui; conferir se são o
mesmo desligamento.)*

### Daqui pra frente (lançar aqui a cada operação nova)
| Data | Nome / Razão social | CPF/CNPJ | Tipo | Qtde ações | Natureza da operação | Observação |
|------|----------------------|----------|------|------------|------------------------|------------|
| — | — | — | — | — | — | *(nenhuma movimentação lançada desde 19/05/2026 — próxima saída/entrada de médico entra aqui)* |

**Tipo:** entrada · saída · transferência (entre acionistas) · recompra (H2 readquire e cancela/mantém em tesouraria)
**Natureza:** ex. venda de plantão-equity, distrato, desligamento, subscrição de aumento de capital

## Regra de ouro (nunca violar)
Quando um médico sai, **o nome dele NÃO é apagado do livro.** O lançamento
correto é:
1. Zerar a posição dele no Registro de Ações Nominativas (0 ações), mantendo a
   linha histórica.
2. Lançar a entrada do adquirente (a própria H2, em recompra, ou outro sócio)
   como novo titular daquelas ações, com data.
3. Registrar a operação nesta tabela de movimentações no mesmo dia.

Apagar uma linha quebra a rastreabilidade que é o propósito legal do livro —
e não há forma de reconstituir depois quem era dono do quê em qual data.

## Reconciliação de 2026-07-20 — Livro × `TERMOS SA.xlsx`

Cruzei o livro atual (1.393 acionistas) e o livro anterior (708 registros até
28/02/2025) contra a planilha de controle `TERMOS SA.xlsx`. Planilha bruta e
todas as listas completas ficaram em
[`2026-07-20-reconciliacao-livro-termos-sa.xlsx`](2026-07-20-reconciliacao-livro-termos-sa.xlsx).

**Correção de leitura (2026-07-21):** a aba "Termos de Adesão à SA" (2.927
linhas) não é só entrada — a coluna D (VÍNCULO) também tem 131 linhas
marcadas "SAÍDA S.A." misturadas no meio das de entrada. Refiz a separação
usando essa coluna como critério (não o nome da aba), e juntei essas 131
linhas com as 92 da aba dedicada "Termos de Saída SA" (76 saídas confirmadas
únicas depois de tirar duplicata). Também passei a priorizar o nome da PJ
(quando o campo "NOMES DOS MÉDICOS" vem no formato "Fulano - Fulano Serviços
Médicos Ltda") na hora de cruzar com o livro — nesse formato, quem consta
no livro é a PJ, não a pessoa física.

**Limitação do método:** a planilha de termos não tem coluna de CPF/CNPJ —
a conferência foi feita por nome (normalizado, comparando conjuntos de
tokens, com as palavras genéricas de razão social — "serviços médicos ltda",
"clínica médica", "assistência" etc. — descartadas do cruzamento por PJ, pois
senão qualquer duas empresas com nome genérico "colidiam"). Isso é confiável
para achar coincidências claras, mas não é prova documental — qualquer achado
abaixo que vire uma correção no livro deve ser confirmado manualmente antes
de mexer no registro oficial.

**Resultado (já com a correção do VÍNCULO):**
- ✅ Nenhum dos 76 termos de saída confirmados (arquivado/registrado, juntando
  as duas fontes) corresponde a alguém que ainda consta no livro atual — ver
  tabela histórica acima.
- ⚠️ **15 nomes que estavam no livro anterior (fev/2025) e não estão no livro
  atual (mai/2026), sem nenhum Termo de Saída correspondente na planilha.**
  Prioridade de conferência — ou saíram sem que o termo fosse
  gerado/arquivado, ou houve erro na consolidação do livro novo:

  | Nome (termo de adesão) | Nome no livro antigo (fev/2025) | Data adesão |
  |---|---|---|
  | CAIO CARVALHO | CAIO CARVALHO BENIGNO | 2024-03-01 |
  | JAISON HIGINO MICAS - J & L CLINICA MEDICA LTDA | JAISON HIGINO MICAS | 2024-05-01 |
  | LUANA CARRIJO DE OLIVEIRA | LUANA OLIVEIRA CARRIJO | 2024-05-01 |
  | ARIADNNY LEAL BORGES DE PÁDUA | ARIADNNY LEAL BORGES | 2024-05-01 |
  | GABRIELA DE SOUZA CAMPOS - GC CLINICA MEDICA LTDA | GABRIELA DE SOUZA CAMPOS | 2024-06-24 |
  | RAQUEL RUFINO GOMES LEAL - RAQUEL RUFINO GOMES LEAL CLINICA MEDICA LTDA | RAQUEL RUFINO GOMES LEAL | 2024-07-01 |
  | MARCELO MOURA CARVALHO - MMC CARRER LTDA | MARCELO MOURA CARVALHO | 2024-08-26 |
  | ANDRÉ ALMEIDA DAGOSTINO - CLINICA SANTA CLARA LTDA | ANDRE ALMEIDA DAGOSTINO | 2024-11-15 |
  | LINO FRANCO JUNIOR - L F JUNIOR CLINICA MEDICA | LINO FRANCO JUNIOR | 2024-11-15 |
  | LEANDRO LOURENÇO DOS SANTOS - LOURENCO E MOTA CONSULTORIO MEDICO LTDA | LEANDRO LOURENCO DOS SANTOS | 2024-11-15 |
  | LUIS TIAGO LIMA CUNHA | LUIS TIAGO BATISTA LIMA CUNHA | 2024-11-28 |
  | ADILSON VALEZIN CASTRO - CASTRO ASSISTENCIA MEDICA LTDA | ADILSON VALEZIN CASTRO | 2024-12-01 |
  | FÚLVIA FERNANDES TOMAIN - FULVIA TOMAIN SERVICOS MEDICOS LTDA | FULVIA FERNANDES TOMAIN | 2025-01-01 |
  | Viviane De Sa Pereira - VIVIANE DE SA PEREIRA | VIVIANE BATISTA DE MAGALHÃES PEREIRA | 2026-02-01 |
  | Moema Queiroz Barbosa | MOEMA QUEIROZ BARBOSA | 2026-03-01 |

  (Descartei dessa lista quem já tem termo de saída batendo por nome — ex.
  Renan Ivo Horta Alvarenga, Aloisio de Freitas Jorge Junior e Marcos
  Antonio da Silva Junior também sumiram do livro antigo pro novo, mas têm
  saída confirmada na planilha, então está correto.)

- 📋 **804 Termos de Adesão confirmados (assinado/arquivado/registrado, já
  excluindo os que na verdade eram saída disfarçada de adesão) sem
  correspondência no livro atual** — a maior parte (786) nunca apareceu em
  nenhum dos dois livros. Isso pode ser (a) processo normal — termo assinado
  é só o primeiro passo, e a emissão/registro efetivo das ações só acontece
  numa AGE de aumento de capital posterior, que ainda não rodou pra esses
  nomes; ou (b) lacuna real de registro. **Não dá pra saber qual é sem
  perguntar pro Guilherme/contábil como funciona esse fluxo hoje** — não
  assumi nada, só documentei. Lista completa na aba
  `Adesao_sem_registro_no_livro` do xlsx.

- Achado à parte, de qualidade de dados na planilha: ~40 variações distintas
  de texto na coluna STATUS (ex. "Arquivado", "ARQUIVADO", "ASSINADO E
  ARQUIVADO", "REGISTRADO" repetido) sem vocabulário controlado, algumas
  linhas de nome inválidas (ex. "Enviado" como se fosse nome de médico) e
  duplicidade de linhas para a mesma pessoa/data. Recomendo: (1) padronizar
  a lista de STATUS possíveis (dropdown fixo), (2) adicionar coluna de
  CPF/CNPJ nos Termos de Adesão e Saída — sem isso, toda reconciliação futura
  depende de nome, que é frágil (homônimos, nome de casada, abreviação).

## Reconstrução de 2026-07-21 — minuta do livro atualizado

**Por que reconstruir do zero:** o livro de 19/05/2026 (1.393 acionistas) era
um rascunho feito com o Claude numa sessão anterior, nunca levado à
contabilidade — não tinha base confiável. A reconstrução abaixo parte do
livro de 28/02/2025 (o único com assinatura de sócio + contador) e aplica
todas as movimentações confirmadas na `TERMOS SA.xlsx` desde então.

**Metodologia:**
1. Base = livro de 28/02/2025 (708 registros).
2. Baixa (zera posição) de quem tem Termo de Saída confirmado (arquivado ou
   registrado) — 76 saídas confirmadas, das quais 2 encontradas no livro
   antigo (a maioria dos outros 74 já não estava lá — saíram antes do
   fechamento de fev/2025).
3. Adição de todo Termo de Adesão confirmado (assinado, arquivado, assinado
   e arquivado, registrado ou assinado pelo médico — **por decisão sua,
   inclui também quem só tem "Assinado" sem arquivamento**) que ainda não
   tinha posição no livro de 28/02/2025 — 1.531 novos entrantes, 10 ações
   cada (padrão do livro).
4. CPF/CNPJ dos novos entrantes — cruzado em 4 rodadas, por nome, sempre
   exigindo nome completo com sobrenome distintivo (nunca primeiro-nome ou
   sobrenome comum isolado, pra não atribuir CPF errado a pessoa errada):
   1. `TESTE_backup_antes_MHC.xlsx` (cadastro médico, 1.879 registros) — 771
      encontrados. **2 CPFs dessa fonte estavam errados** (Rainara Pereira
      dos Anjos e Felipe Silva Menezes — dígito verificador inválido);
      corrigidos com os números que o Gustavo confirmou.
   2. `ATT- CPF_CNPJ_Socios_H2_ATUALIZADA.xlsx` (planilha com match por
      nome/score já pronta) — só aceitei score ≥ 0,95 e sem a marca
      "REVISAR" do próprio arquivo — 6 encontrados. **1 desses (Marta de
      Pinho Alcântara) também tinha CPF com dígito inválido** — revertida
      para pendente, não usei.
   3. Os 3 exports do `h2-termos-web` ("Termo de Adesão à SA*.xlsx", export
      direto do sistema de origem, já vem com CPF/CNPJ do cadastro do
      médico — fonte mais confiável) — 380 registros, 97 encontrados (1
      CPF inválido na própria fonte, ignorado: Ianara Janaina de Araujo
      Tavares Xavier).
   4. `2026-07-21-termos-gerados-h2-termos-web-nome-cpf.xlsx` — extração em
      lote de 1.054 termos em PDF do h2-termos-web (Adesão PF/PJ, Alteração
      PF→PJ, e também Saída PF/PJ — essas últimas ainda não cruzei contra a
      lista de saída, só usei pra CPF por enquanto) — 125 encontrados (12
      CPF/CNPJ inválidos na própria fonte, ignorados: Ianara Janaina de
      Araujo Tavares Xavier, Caroline Urzedo Severino, Kelly Vieira Prates,
      Julia Ceconello Coelho, Andrea dos Santos Carvalho, Leonardo Furno
      Petraglia).
5. Removidas 5 duplicidades reais que só apareceram depois do cruzamento de
   CPF/CNPJ (mesmo documento, grafia do nome diferente entre as fontes —
   ver double-check abaixo).

**Resultado: 2.232 acionistas, 23.170 ações.**
| Nível de confirmação | Qtde |
|---|---|
| Base (livro de 28/02/2025) | 706 |
| Novo — confirmação forte (arquivado/registrado) | 461 |
| Novo — só assinado (sem arquivamento) | 1.065 |

Esse total é bem maior que a referência de "1.600+ acionistas" que consta em
`pendencias.md` e muito maior que os 1.393 do livro descartado. **Não
escondi essa diferença** — ela é esperada, já que a base de comparação
(1.393) era o próprio rascunho que estamos jogando fora, e a planilha de
termos tem muito mais gente com adesão assinada do que qualquer um dos dois
livros anteriores capturava.

### Double-check da minuta (2026-07-21, última rodada)
- ✅ Soma de ações confere (23.170) e a soma das participações bate ~100%
  (100,0908% — a diferença é arredondamento de casas decimais em 2.232
  linhas, não erro de dado).
- ✅ Zero CPF/CNPJ duplicado depois da limpeza (5 duplicidades reais
  encontradas e removidas: Pedro Gui(i)marães Porto, Es(t)éfane Almeida
  Prado, Milena (de) Fátima Luz Pereira, Clinton Henry Colaço
  Conegu(e/n)des, Femme Assistência Ginecológ(ica)/(ia) e
  Obst(étrica)/(etrícia) — mesmo CPF/CNPJ, nome grafado diferente entre as
  fontes; mantida a linha mais antiga/confiável em cada par).
- ✅ **Corrigido em 2026-07-21**, com CPF confirmado pelo Gustavo: Rainara
  Pereira dos Anjos → `063.345.215-78`; Felipe Silva Menezes →
  `052.494.075-44` (o `TESTE_backup_antes_MHC.xlsx` tinha os dois errados).
- ⚠️ **2 CPFs com dígito verificador inválido, ainda não confirmados** —
  herdados do livro anterior (não introduzidos nesta reconstrução): Jucelio
  Lima Martins (`136.532.271-15`) e Phellipe Di Monaco Lima
  (`022.469.081-64`). Confirmar com a fonte original antes de assinar o
  livro.
- ⚠️ Duas fontes de CPF adicionais traziam número **com dígito verificador
  inválido** para alguém que eu ia usar — descartei e mantive pendente em
  vez de gravar errado: Marta de Pinho Alcântara (vinha de
  `ATT-CPF_CNPJ_Socios_H2_ATUALIZADA.xlsx`) e Ianara Janaina de Araujo
  Tavares Xavier (vinha de um dos exports do h2-termos-web). Precisam de
  CPF correto de outra fonte.
- ⚠️ **RV MEDCARE SERVIÇOS MÉDICOS LTDA (PJ) aparece 2x** como novo
  entrante (termos de 2025-10-01 e 2025-12-01), nenhuma das duas com
  CPF/CNPJ encontrado — pode ser a mesma assinatura duplicada ou dois
  médicos distintos usando a mesma PJ. Não resolvi sozinho — precisa
  conferência.
- 📋 **533 dos 1.530 novos entrantes continuam sem CPF/CNPJ** (já eram 1.531
  novos entrantes, um foi mesclado na duplicidade da Femme) — cruzados
  contra 5 fontes (`TESTE_backup_antes_MHC.xlsx`,
  `ATT-CPF_CNPJ_Socios_H2_ATUALIZADA.xlsx`, os 3 exports do `h2-termos-web`
  e o lote de 1.054 termos em PDF extraídos) e ainda não encontrados em
  nenhuma. **O livro não pode ser fechado/assinado enquanto isso não for
  resolvido** — falta identificação do titular é o requisito central do
  art. 100, I, da Lei 6.404/76. Lista completa (com nome, ações,
  origem/status do termo) na planilha, coluna `cpf_cnpj = "A CONFIRMAR"`.

Arquivo de dados: [`2026-07-21-MINUTA-livro-acionistas-reconstruido.xlsx`](2026-07-21-MINUTA-livro-acionistas-reconstruido.xlsx).
Documento formatado (minuta, não assinável ainda):
[`2026-07-21-MINUTA-livro-acionistas-reconstruido.pdf`](2026-07-21-MINUTA-livro-acionistas-reconstruido.pdf).

## Drive de contato@h2saude.com.br — cruzamento dos 533 pendentes (2026-07-22)

Gustavo pediu para checar se o Drive de `contato@h2saude.com.br` (pastas
individuais por médico, com CNH/RG/CRM) resolvia os 533 nomes ainda sem
CPF/CNPJ na minuta. Resultado: **cobre só 23 dos 533 (~4%)**.

**Por quê:** esse Drive é um sistema de credenciamento por hospital, criado a
partir de meados/final de 2025 (pastas-raiz "Hospital - Itapuí", "HREP -
Hospital Regional Eustáquio Portela / Hospital de Valença", "UPA Putim" —
todos SP/RJ), com ~243 pastas de médico ao todo. Os 533 pendentes são
majoritariamente adesões de 2023-2025 em outras unidades (REGIÃO NOROESTE,
MNC, HEMU, HMNSLP, MHC, HMDAB, HRE, UPA Pinhais — Piauí/Goiás e outras
regiões). São duas populações de médicos diferentes, quase sem sobreposição.
Nem o próprio Guilherme Ferreira de Almeida tem pasta lá.

**Metodologia:** paginei as ~243 pastas do Drive (owner `contato@h2saude.com.br`,
até esgotar `nextPageToken`) e cruzei os títulos (nome normalizado) contra os
533 pendentes. Para as pastas com filiação a uma pasta-raiz de hospital (têm
`parentId` navegável), a busca `parentId = '<id>'` retorna os arquivos de
dentro — inclusive o texto já extraído (OCR) pelo próprio Google Drive, então
na maioria dos casos deu pra pegar o CPF sem precisar baixar/abrir o arquivo.
Pastas compartilhadas só por link público (sem `parentId` navegável) não dão
pra listar o conteúdo por essa via.

**Resultado dos 23 batidos:**
- ✅ **14 CPFs confirmados e já lançados na minuta** (nome pareado claramente
  ao documento — RG/CNH/CRM): Fernanda Sobral Soares, Izadora Martins da
  Silva Cabral, Cássia de Souza Rebouças, Giovana de Heberson Souza, Nayara
  Pereira de Almeida Oliveira, Pedro Canuto Pimentel Neto, Thiago José
  Barroso Martins, Frederico de Souza Chaveiro, Marcelo Ferreira de Oliveira
  Filho, Luisa Rezende Barros, Gabriela Moret, Aline Turini (PJ), Helber José
  de Moura dos Anjos, Rhaissa Vasconcelos Melo.
- ⚠️ **3 parciais, não lançados** (dado encontrado na pasta mas não
  100% pareado nome↔documento no trecho disponível — conferir manualmente
  antes de usar): Emília Katrine Macedo Coelho Moussa (CPF provável
  726.366.451-87), Maria Gabriela Rego Montanha Rebello (CPF provável
  072.010.739-31), Felipe Oliveira Vieira Neto — PJ (CNPJ confirmado
  56.086.271/0001-66, CPF pessoal só parcialmente visível).
- ❌ **6 sem documento com CPF legível** nos arquivos disponíveis na pasta:
  Sibele Leite Lee Galvão, Gabriela Schiavo Salata, Ádamo Santos de Almeida,
  Beatriz França do Vale, Emilene Speltri, Anderson Meneses Almeida.

**Restam ~516-519 dos 533 sem CPF** — esse Drive não é a fonte pra fechar
essa lacuna. Próximo passo sugerido: perguntar a quem geria o cadastro médico
das unidades REGIÃO NOROESTE/MNC/HEMU/HMNSLP/MHC/HMDAB na época (2023-2025)
se existe outro repositório equivalente daquele período.

### Rodada 2 (2026-07-22, mesmo dia) — Gustavo compartilhou todas as pastas

Após o resultado acima (só 4% de cobertura), Gustavo compartilhou
**todas** as pastas do Drive `contato@h2saude.com.br` diretamente com a conta
conectada (`ggsoliveira35@gmail.com`), o que desbloqueou navegação
`parentId` em dezenas de pastas-raiz de hospital que antes só eram
acessíveis por link público (não listáveis). Isso revelou uma árvore muito
maior do que a rodada 1 mapeou: pastas-raiz adicionais de RN, HEMU, HMNSLP,
MHC, HMDAB, HRE, UPA Pinhais, HEI, HEJA, HESLMB, HRCM, HRSDA, HRJL, UPA
Picos, UPA SRN, CDP, HSM, HEJ, HEAPA, HEAL, HRDLEM, HEMNSL, CHL, SCROO,
Hospital Salvalus, MNC, HRP, ESTÂNCIA, HMA, HMC, HSPPD, UPA São Vicente de
Paulo, Hospital Vitória, UPA Putim, entre outras.

Ao invés de reprocessar a árvore inteira (mais de 800 nomes de pasta
coletados numa amostragem parcial), Gustavo optou por: **extrair CPF dos
novos nomes já identificados como pasta de médico pendente e parar por
aqui** — não continuar a varredura exaustiva nesta sessão.

**Resultado da rodada 2: 42 CPFs novos confirmados e já lançados na
minuta** (nome pareado a documento oficial — RG/CNH/CRM/certidão do
conselho regional):

Guilherme Augusto da Costa, Ulisses Tavares de Arruda, Amanda de Moraes
Ribeiro Leite, Silvio José de Oliveira Júnior, Mauro Moreira Marques, Lucas
Felipe Silva Pina, Eduarda Viana Trajano, Cássio Raniere Cardoso dos
Santos, Isabella Gomes Alves, Bruna Spilborghs Haun Amaral Teixeira,
Sayonara da Silva Paniago, Robson Vettore Nogueira Petrin, Guilherme
Gontijo Guimarães, Joaquim Neto dos Santos (PJ), Alexander Negrelli Reis,
Rafael Messias de Oliveira (PJ), Arthur Melo Santos, Carla Ludmilla
Canário Serrão, Lauro Alves Brasileiro Júnior, Marcelo Possidente
Campanário, José Victor Bolotari Spadácio, Jemima Chaves de Ataíde (PJ),
Laila da Silva Almeida, Gabriel Alves Pinto, Álvaro Ribeiro dos Santos
Sobrinho Segundo, Henrique Gonçalo Pereira de Moura, Bárbara Aparecida
Barcelos Carvalho, João Paulo Siqueira de Aguiar, Vergílio Freitas Queiroz
Neto, Ana Cristina Queiroz da Silva, Idelânio Barreto Sampaio, Stephanie
Evelin Queiroz de Freitas Araújo, Ana Laura do Patrocínio Ramos,
Alessandra de Oliveira Ferreira Barros Farias, Edmar Santana Oliveira
Filho, Carlos Henrique Lisboa Freire, Lavínia Juvenal Nicodemos, Tássia
Dominguez de Souza, Maria Fernanda Simas Souza, Thalita Cairo Souza,
Daniella Fiuza Peruna Silva, Maria da Penha Barros.

**Ainda pendentes** (matches encontrados na varredura parcial mas sem
tempo de extrair CPF nesta sessão — folder já localizado, retomar
buscando `parentId` das pastas dos hospitais indicados entre parênteses):
Antônio Evangelista Apolônio Neto (HRCM), Vanessa Ribeiro Costa Santana
(MHC), Andrea dos Santos Carvalho (MHC), Paulo Fernando Sandes Soares
(HRSDA), Diana Araújo dos Santos (MHC), Hiléia Santana Lopes Ferreira
Silva (MHC), Eliza Marielle Lopes Araújo (HRCM), Isabel Karoline de Sousa
Carvalho Costa (HRCM).

**Total acumulado (rodada 1 + rodada 2): 56 dos 533 pendentes resolvidos
(~10,5%)**. A árvore do Drive segue maior do que o mapeado — a varredura
NÃO foi exaustiva (parou por decisão do Gustavo, não por esgotamento da
árvore). Continuar em sessão futura, mirando especificamente as unidades
por trás dos ~477 nomes ainda sem CPF, usando o mapeamento nome→unidade já
feito em `pendentes_com_unidade.json` (scratchpad) para escolher qual
pasta-raiz de hospital vasculhar primeiro.

### Rodada 3 (2026-07-22, mesmo dia) — busca organizada por unidade

A pedido do Gustavo, mudei o método: em vez de continuar a varredura ampla
sem critério, separei os ~478 pendentes restantes (533 − 56 já resolvidos nas
rodadas 1+2) por unidade de vínculo (usando o cruzamento nome→unidade contra
`TERMOS SA.xlsx`, salvo em `pendentes_por_unidade.json` no scratchpad) e
busquei pasta-raiz por pasta-raiz, maior concentração primeiro: REGIÃO
NOROESTE (54 pendentes), HEMU (39), MNC (33), HMNSLP (29), MHC (16), HMDAB
(10), UPA Pinhais (10).

Nesta rodada, dei conta de mapear e extrair CPF em REGIÃO NOROESTE, MHC,
HMDAB e UPA Pinhais (só a primeira página de cada pasta-raiz — todas têm
`nextPageToken`, ainda não esgotadas). HEMU, MNC e HMNSLP têm uma estrutura
diferente — as pastas de médico ficam dentro de subpastas por
especialidade/categoria (ex. "Ginecologia e Obstetrícia", "Pediatria",
"Termos de Adesão - UTI Neonatal", "Mutirão HEMU - Cardiologistas") em vez de
direto na raiz do hospital — ainda não vasculhadas, então **zero matches
nessas 3 unidades por enquanto**, apesar de somarem 101 pendentes.

**Resultado da rodada 3: 21 CPFs novos confirmados e já lançados na minuta**
(nome pareado a documento oficial — RG/CNH/CRM/certidão do conselho
regional/diploma):

Gabriela Milhomem Ferreira, Inajá de Figueiredo Martins Escarião, Gabriela
Assunção Godinho, Mariana Akemy Lopes Iuasse, Yan Ikeda Fonseca, Amanda
Tatiele Carneiro Alves, Érica Lopes Castilho, Carla Cristina Ferreira Costa,
Vanessa Ribeiro Costa Santana, Andrea dos Santos Carvalho, Diana Araújo dos
Santos, Hiléia Santana Lopes Ferreira Silva, Ana Cristina Heine e Silva,
Isabela Chagas Freitas de Andrade Aguiar, Ariane Tamires Freitas Costa,
Leonardo Faidiga, Arthur Ribeiro Barros Ferreira, Gabriela Schiavo Salata,
Ádamo Santos de Almeida, Laís Christine Marcos Burtet, Sâmeque Iagla Belai.

(Vanessa Ribeiro Costa Santana, Andrea dos Santos Carvalho, Diana Araújo dos
Santos e Hiléia Santana Lopes Ferreira Silva eram justamente os 4 nomes da
MHC deixados pendentes ao final da rodada 2. Gabriela Schiavo Salata e Ádamo
Santos de Almeida também já tinham aparecido na rodada 1 como "sem documento
com CPF legível" — desta vez, com as pastas compartilhadas por completo,
apareceram documentos adicionais com o CPF/CNPJ visível.)

⚠️ **Achado a conferir:** pelo menos 7 dos 21 nomes acima (Gabriela Milhomem
Ferreira, Inajá de Figueiredo Martins Escarião, Gabriela Assunção Godinho,
Mariana Akemy Lopes Iuasse, Yan Ikeda Fonseca, Amanda Tatiele Carneiro Alves,
Carla Cristina Ferreira Costa, Érica Lopes Castilho) também constam na
tabela de saídas confirmadas mais acima nesta mesma página (Termo de Saída
arquivado/registrado, todos entre 2024 e 2025). Não investiguei se é a mesma
adesão zerada (regra de ouro — linha mantida com 0 ações, mas precisa de
CPF documentado mesmo assim) ou uma readmissão posterior com novo Termo de
Adesão; qualquer uma das duas leituras é compatível com o CPF agora
lançado, mas vale conferir com o Guilherme/contábil antes de fechar o livro.

⚠️ **1 nome sem CPF localizável — pasta sem documento com o dado:**

- Igor Pinheiro Lima (Região Noroeste) — pasta existe
  (`1PEF5thqKRO6SAYcyZXKhIVnQl4By6RIS`), mas contém só uma Certidão de
  Inscrição do CREMEGO, sem CPF no texto. Confirmado com o Gustavo que não
  há outro documento na pasta. Precisa de outra fonte (não o Drive de
  `contato@h2saude.com.br`) para fechar este nome.

**Correção pós-rodada 3, mesma sessão:** Caio Eduardo Faidiga de Barros
(UPA Pinhais) foi inicialmente reportado como "pasta errada" — o
`parentId` que eu tinha associado ao nome dele na verdade pertencia a outra
médica (Sissy Valéria Pérez Salas). Gustavo forneceu o link direto da
pasta correta
(`https://drive.google.com/drive/u/2/folders/1LL07wjgRP214WRvWjeBGqMaLzD3t7YaY`),
onde o CPF `107.806.929-85` foi confirmado por CNH, contrato social (PJ
"Caio Faidiga Serviços Médicos Ltda"), certidão de antecedentes criminais e
dados bancários — todos consistentes. **Erro era meu (mapeamento de pasta
incorreto), não ausência real do documento** — lançado na minuta (linha
1356, que também tinha erro de grafia "FADIGA" em vez de "FAIDIGA",
corrigido junto).

Duas fontes de CPF adicionais precisam de correção de grafia na minuta em
si (não no cruzamento): "Amanda Tatiele Carneiro Carneiro Alves" (palavra
duplicada, linha 758) e "Sâmeque Lagla Belai" (LAGLA em vez de IAGLA, linha
1417) — já corrigidas nesta rodada, direto por número de linha.

**Total acumulado (rodadas 1+2+3): 77 dos 533 pendentes resolvidos
(~14,4%)**. Restam ~456, com HEMU/MNC/HMNSLP (101 nomes, pastas por
especialidade ainda não abertas) como maior bloco não tocado, seguido das
páginas seguintes de REGIÃO NOROESTE/MHC/HMDAB/UPA Pinhais (nextPageToken
ainda não paginado) e das unidades menores ainda não buscadas (HRP, HEMNSL,
HRCM, HEJA, HEI, HRE, UPA São Vicente de Paulo, entre ~20 outras com 1-3
pendentes cada). Os ~240 nomes "(SEM UNIDADE IDENTIFICADA)" — majoritariamente
PJ/empresa — não têm estratégia por unidade aplicável; precisam de busca
direta por nome/razão social.

### Rodada 4 (2026-07-22, mesmo dia) — RN, MHC, HMDAB e UPA Pinhais concluídos

Identifiquei as pastas-raiz reais (por `title`, sem `parentId`) de REGIÃO
NOROESTE, MHC, HMDAB, UPA Pinhais, HEMU, MNC e HMNSLP e paginei o conteúdo
das quatro primeiras (listagem completa da HMDAB — 150 pastas, sem mais
páginas; RN, MHC e UPA Pinhais só a primeira página de ~200, ainda com
`nextPageToken`). Cruzei os títulos de pasta contra os pendentes de cada
unidade e extraí CPF de todos os matches encontrados nessa primeira
varredura.

**Resultado da rodada 4: 30 CPFs novos confirmados e já lançados na
minuta** (nome pareado a documento oficial):

Filippe Ferreira Morais, Pabliny Stefany de Lima Gomes, Lucas Gomes de
Souza, Christe Ellen Batista Fanzlau, Renata Bueno Bucci Py, Bruna Morais
Cordeiro, Dayton Douglas da Silva, Eduardo Mendes Stoffels, Antônia Vaz
Messias Lopes, Driele Cunha de Paiva Almeida, Paula Alves Ferreira,
Cantionil Alves Borges Neto, Luís Felipe Pires Fontana, Bruna Marques
Vilarinho Ribeiro, Daniela Bruna Martins Abreu, Vitor Hermano Vilarins
Brito Oliveira, Isabela Costa Borges, Gilene Luiza de Oliveira, Juliana
Alves Teixeira, Maria de Fátima Lopes de Oliveira, Ana Carolina Castro
Matos, Luiza Lopes de Almeida, Rafael Guimarães de Santana Caires, Sarah
Rafaela Mascarenhas Santos, Thaís Magalhães de Faria, Gabriela Spolon de
Freitas, Larissa de Queiroz Mamede, Angélica Medeiros Freitas, Lara Bendo
Eyng, Evellyn Gabriela Chaves da Silva.

(Corrigidas mais duas grafias na minuta que impediam o match automático:
"Thais Magalhães​​​ de Faria" tinha caracteres invisíveis embutidos no
nome, linha 1848.)

⚠️ **1 nome sem CPF localizável nesta rodada:** Gustavo Machado Trigueiro
(Região Noroeste) — pasta existe, mas o único arquivo disponível é uma
Certidão de Antecedentes Éticos, sem CPF no texto. Mesmo padrão de Igor
Pinheiro Lima: precisa de outra fonte.

**Total acumulado (rodadas 1+2+3+4): 107 dos 533 pendentes resolvidos
(~20,1%)**. RN, MHC, HMDAB e UPA Pinhais têm mais páginas por paginar
(exceto HMDAB, já esgotada); HEMU/MNC/HMNSLP (101 nomes) seguem como maior
bloco intocado — pastas de médico ficam dentro de subpastas por
especialidade dentro de cada hospital, ainda não abertas.

### Rodada 5 (2026-07-22, mesmo dia) — HEMU, MNC e HMNSLP concluídos

Fechei o bloco que ficou intocado na rodada 4: HEMU, MNC e HMNSLP têm as
pastas de médico organizadas dentro de subpastas por especialidade (não na
raiz do hospital como nas outras unidades). Mapeei essas subpastas, achei o
`parentId` de cada médico pendente das três unidades e extraí o CPF de
cada pasta individualmente.

**Resultado da rodada 5: 92 CPFs novos confirmados e já lançados na
minuta** (nome pareado a documento oficial — CRM, RG/CNH, dados bancários
ou certidões):

**HEMU (33 de 34):** Barbara Santos Nogueira Pacheco, Karolina Carvalhaes
Simoes de Lima, Sibele Leite Lee Galvao, Beatriz Franca do Vale, Emilia
Katrine Macedo Coelho Moussa, Brunna Felipe Conti, Julia Loyola Caldas,
Maria Carolina Padovani Guerra, Andressa Lorrany Batista Almeida, Rafael
Mamede Pereira, Maria Jose Carvalho Souza, Leticia de Castro Silva, Isabela
Borges de Freitas, Taynara Tenorio Bezerra, Gabriela da Silva Teixeira,
Beatriz Marins Carneiro, Fabiana Calaca de Moraes, Bruna Ferreira Santana,
Oxana Gaiao dos Reis, Victoria Coelho Jacome Queiroz, Isabela Leao
Portilho, Larissa de Carvalho Silva, Eline Louise Souza Oliveira, Valeria
Martins Pereira, Andressa Lacerda da Silva Morais, Fernando Goncalves
Borges, Rafaela Wander Almeida Braga, Amanda Pereira da Costa, Paula
Danielli Silva Souza, Helcio Lopes Martins, Pedro Henrique Fernandes
Penedo, Janio Alves Teodoro, Eduardo Henrique Vieira Araujo.

**MNC (30 de 33):** Aminy Maria do Carmo Souza, Lafaiete de Godoi Neto, Ana
Julia Modesto Lima, Isabelle Silva Diniz Alves Borges, Natalia Silva
Rodrigues, Hillary Stefanny Neias Ribeiro, Thais de Jesus Brasil Borges,
Ana Leticia Xavier Amaral, Julliano Moraes e Silva, Jessica Castro Gomes
Gerais, Mariana Ludovico de Almeida, Marcella Marinho Ribeiro, Larissa
Alves Marcelino, Fernanda Cabral Piancastelli, Karla Tortato, Lorena da
Mata Alves, Ana Carla Martins Rodrigues, Vanessa Cristina Guedes Silveira,
Gyovanna Lourenco Luz Alves, Ana Luiza Boni, Patricia Karla Vilarinho
Santana Ribeiro, Mariana Matias de Lima Holdefer, Fabiana Fernandes
Marajo, Friedman do Brasil Lima, Lara Queiroz Musse, Deborah Carneiro
Nunes de Lima, Adrielly Joice Mendes Santana Brandao, Cinthia Bernardo
Queiroz Borges, Leandro Pires Silva Filho, Flaviano Augusto Dias (achado
fisicamente na subpasta de UTI Pediátrica/Neonatal do HEMU, mas listado
como pendente do MNC — CPF confirmado de qualquer forma).

**HMNSLP (29 de 29 — unidade fechada):** Karoliny Maria Torres Pilatti
Ross, Claudia Cardoso Mares de Souza, Elisete Yurie Murata, Leila Palhano
Pontes, Valentina Spinello Correia, Tatiana Francinne Regis Navarro, Tiago
Wollmeister Muller, Amanda de Lima Szlichta, Camila Cescatto Goncalves,
Flavia Centenaro de Oliveira, Gabriela Wensing Raimann, Hannelyze Wagner,
Fabiano dos Santos Martins, Juliana Sopchaki Fagundes, Mariana Mendes
Teixeira, Alessandro Nassar do Nascimento, Amanda Giuberti Poltronieri,
Daniel Rodrigues Mendes, Anthony Augusto Carmona, Ana Karolina Ferreira
Goncalves Romano, Christiane Paludo Chiochetta, Anne Caroline Broska,
Daniel Proenca Malaquias, Elisa Moreira Vieira Lobo, Bianca Ferreira
Bazzo, Renan Felipe Paraguai Jardim, Isabella Chagas Leli Jordao, Anik
Baptista Bairral Rosa, Fernanda Hellinger.

**Duplicidade de grafia corrigida na minuta:** "PEDRO HENRIQUE FERNANDES
PANEDO" (linha 803) é a mesma pessoa que "PEDRO HENRIQUE FERNANDES PENEDO"
(linha 568, já resolvido em rodada anterior) — grafia divergente na
planilha original. Apliquei o mesmo CPF (025.305.131-20) à linha 803 com
nota explicando a duplicidade, em vez de tratar como pendente separado.

⚠️ **4 nomes confirmados como "pasta sem documentos"** (mesmo padrão de
Igor Pinheiro Lima/Gustavo Machado Trigueiro — pasta existe no Drive mas
está vazia, sem nenhum arquivo): Isabella Luanna de Oliveira Martins
(HEMU), Eddy Marcos da Silveira (MNC), Martina Ascari (MNC), Elisangela
Ferreira Pires (MNC). Marcados na minuta como confirmado/sem documentos,
não como pendente de busca — precisam de outra fonte (RH, contrato
assinado) se o CPF for necessário.

**Total acumulado (rodadas 1+2+3+4+5): 199 dos 533 pendentes resolvidos
(~37,3%)**. HEMU, MNC e HMNSLP agora fechados. Restam: páginas adicionais
de RN, MHC e UPA Pinhais (nextPageToken pendente) e ~20 unidades menores
com 1-3 nomes pendentes cada, ainda não buscadas.

### Rodada 6 (2026-07-22, mesmo dia) — Região Noroeste concluída + início de UPA Pinhais/HMA

Reidentifiquei as pastas-raiz de RN, UPA Pinhais, MHC e HRE (IDs não haviam
sido salvos das rodadas anteriores) e busquei diretamente por nome dentro
de cada pasta-raiz — mais eficiente que paginar centenas de pastas por
unidade. Fechei toda a Região Noroeste (15 de 17 nomes pendentes; os outros
2 — Gustavo Machado Trigueiro e Igor Pinheiro Lima — já documentados em
rodada anterior como sem CPF localizável) e mais 5 nomes entre
UPA Pinhais/HMA.

**Resultado da rodada 6: 20 CPFs novos confirmados e já lançados na
minuta:**

**Região Noroeste (15):** Alice Alves Resende Dorneles, Vitoria Morais
Monteiro Lamim, Daniella Coimbra Cordeiro, Carlos Henrique Porto de
Barros, Ana Carolina Tocantins Albuquerque, Admilson Barbosa Queiroz,
Lucas Soares Teixeira, Valdeci Justino da Silva Junior, Áurea Gomes Pidde,
Milena Pereira de Araújo Oliveira, Cynthia Nichigaki Sericaku, Juliana
Veras de Mesquita, Larissa Jacob Rakowski, Natã Lopes Fernandes, Gabriela
Costa Santos.

**UPA Pinhais / HMA (5):** Bruna Bail Bacila, Laís Christine Marcos
Burtet, Masataka Noji, Isadora Drews Brenny (achada fisicamente na pasta
do HMA, listada como pendente da UPA Pinhais — CPF confirmado de qualquer
forma), Bruna Schuster Franco de Oliveira.

**6 grafias divergentes corrigidas manualmente** (nome na minuta não batia
com o nome no Drive por variação ortográfica — Monteira/Monteiro,
Oliviera/Oliveira, Christiane/Christine, Massataka/Masataka,
Brews/Drews, Frande/Franco): aplicado o CPF certo à linha da minuta com
nota explicando a divergência.

⚠️ **9 nomes da Região Noroeste sem pasta localizável nesta rodada**
(busca por nome dentro da pasta-raiz não retornou resultado — pode ser
grafia muito diferente ou pasta inexistente, precisa de nova tentativa):
Laura Rohlfs Taquary, Daniela Pereira Espanã, William Borges de Menezes
Filho, Bruna de Castro Oliveira, Letícia Dias Faria Nava, Italo Leonel
Fernandes Silva, Thiago Marçal Costa, Gabriela Alves Louzada Flávio,
Larissa Mello Brandão.

⚠️ **4 nomes de UPA Pinhais sem pasta localizável nesta rodada:** Luis
Gabriel Souza Peres, Gabriela Micheten Dias, Silvia Sayuri Takahashi,
Khaterine Paz Oliva.

**Total acumulado (rodadas 1+2+3+4+5+6): 219 dos 533 pendentes resolvidos
(~41,1%)**. Região Noroeste fechada (com 11 exceções documentadas: 2 sem
CPF localizável + 9 sem pasta localizável). UPA Pinhais, MHC, HRE e HMA
seguem parcialmente abertos — pastas-raiz já identificadas nesta rodada
(ver IDs no scratchpad da sessão), faltando concluir a busca por nome
dos pendentes restantes de cada uma. Também restam ~20 unidades menores
(HRE, HRCM, HRP, HSM, HRSDA, Itapuí, UPA Rio Doce, etc.) com 1-3 nomes
pendentes cada, ainda não buscadas — em sua maioria PJ (CNPJ), fora do
escopo desta busca por pasta de médico.

### Rodada 7 (2026-07-22, mesmo dia) — retry dos 13 nomes sem pasta localizável

Em vez de paginar a pasta-raiz de cada unidade, troquei a estratégia para
busca ampla por sobrenome distintivo em todo o Drive (`title contains
'<sobrenome>'`, sem `parentId`) — resolveu a maioria dos casos que a
rodada 6 não tinha encontrado por restringir a busca à pasta-raiz errada
ou por variação de grafia.

**12 CPFs novos confirmados e já lançados na minuta:**

Laura Rohlfs Taquary (703.616.231-78), Thiago Marçal Costa
(729.399.661-68), Gabriela Alves Louzada Flávio (700.896.301-73), Luis
Gabriel Souza Peres (098.201.259-44 — Drive: "Luís Gabriel Souza Perez"),
Gabriela Micheten Dias (084.297.479-23 — Drive: "Gabriella Micheten
Dias"), Silvia Sayuri Takahashi (098.219.719-54), Khaterine Paz Oliva
(083.945.211-00 — Drive: "Khaterine Paz Oliveira"), Narjara Barreto
Santana (959.326.745-04), Marta de Pinho Alcântara (758.571.195-34),
Luiz Serra Azul Bahia (914.268.475-72), Flávio Moreira Figueiredo
(025.085.815-00 — Drive: "Flávio Moreira Figueredo"), Talita Ribeiro da
Silva (017.003.991-95 — pasta do HMA, fecha o último pendente dessa
unidade).

Vários desses vieram direto do texto do Termo de Transferência de Ações
(nome + CPF do cessionário aparecem no próprio termo já assinado),
sem precisar abrir "Dados Bancários" — mais rápido quando o termo já
existe no Drive.

⚠️ **7 nomes seguem sem pasta localizável mesmo com busca ampla** (podem
ter grafia muito divergente, pasta em outro e-mail/Drive, ou
simplesmente não existir pasta física): Daniela Pereira Espanã, William
Borges de Menezes Filho, Bruna de Castro Oliveira, Letícia Dias Faria
Nava, Italo Leonel Fernandes Silva, Larissa Mello Brandão, Valéria Rossi
Duarte.

**Total acumulado (rodadas 1+2+3+4+5+6+7): 231 dos 533 pendentes
resolvidos (~43,3%)**. UPA Pinhais, MHC, HRE e HMA agora fechados (exceto
os 7 nomes acima, que ficam como pendência documentada). Resta: os 7
nomes acima (tentar de novo com paginação completa da pasta-raiz, já que
a busca por título não encontrou) + ~20 unidades menores com 1-3 nomes
cada, majoritariamente PJ (fora do escopo de busca por pasta de médico).

### Rodada 8 (2026-07-22, mesmo dia) — varredura das ~40 unidades pequenas restantes

Depois de isolar as linhas PF (individuais) ainda pendentes de todas as
unidades pequenas (script `list_pf_only.mjs` — filtra por marcadores de
empresa como "LTDA", "(PJ)", "S/S", "CLINICA" etc.), restavam 64 nomes
individuais. Fiz busca ampla por sobrenome distintivo no Drive inteiro
para todos eles.

**37 CPFs novos confirmados e já lançados na minuta** (a maioria direto
do texto do Termo de Transferência de Ações já assinado, sem precisar
abrir "Dados Bancários"): Luciana Adorno Sattin Rodrigues, Rogério
Scialo, Luciana Costa Bueno de Almeida, Felipe Stutz Piretti Lopes
Franco, Márcia Marolina Dias Ferreira, Sandra Marcia Ramos Pimentel
Afiune, Eduardo Miguel Guerra Fernández, Lúcio Moreira, Luana da Silva
Tonetti, Pablo Freitas Barbosa, Juliana Queiroz Xavier Simão, Larissa
Pires Leite Bringel, Odilon Ibarraz Emery Flores, Marjorie Coelho
Domingues, Maria Gabriela Rego Montanha Rebello, Antonio Evangelista
Apolônio Neto, Eliza Marielle Lopes Araújo, Isabel Karoline de Sousa
Carvalho Costa, Robson Vettore Nogueira Petrin, Francisco Irineu de
Alencar Neto, Marcus Araújo Rodrigues Barros, Arthur de Albuquerque
Barbosa Holanda, Julia Pessoa Portela de Sá, Paulo Fernando Sandes
Soares, Gabriel Mascarenhas Bergholz Sahium, Bruce Bezerra Carvalho
Sousa, Gabriella Mendes Dias Santos, João Victor Oliveira Prado, Walter
Guimarães da Costa Neto, Paula Pacheco Pereira, José Ademário dos Santos
Junior, Catarina Leiliany Pereira Guerra, Vitor Mateus de Araújo Bastos
Teles, Anderson Meneses Almeida, Yosvani Pérez Guerra, Amanda Aguiar
Tonon, Karolinne Kassia Silva Barbosa.

✅ **Luana da Silva Tonetti**: CPF 055.490.621-00 confirmado pelo usuário
em 2026-07-22 (a fonte "Dados Bancários" mostrava "-000" com um dígito a
mais, mas o CPF correto é mesmo 055.490.621-00).

✅ **2 casos que pareciam ambíguos, resolvidos pelo usuário**: Marcelo
Rocha Scaramussa (UNIMED, CPF 014.605.196-39) e Emilene Speltri (Itapuí,
CPF 366.980.138-38) — ambos pagos via CNPJ de empresa própria no Drive,
mas o CPF pessoa física foi confirmado diretamente pelo usuário
(Gustavo) em 2026-07-22 e já lançado na minuta.

⚠️ **9 nomes seguem sem pasta localizável ou sem CPF pessoa física
achado**: Itallo de Almeida Pinheiro, Mateus Félix Lopes, Manoel Estevam
de Avila Filho, Andrielle Nunes Santos Gardia (HEMU), John Pitter
Macaelles Duarte Pereira (HEI), Jullyana Ricielly Dias Silva (HEJA),
Ludymilla Candido Ribeiro da Silva (HEMNSL), Ana Luisa Peres (HMDAB),
Guilherme Pinto Camargo (SÓCIO), Cristiana de Souza Luz Santos (HRP).

**Total acumulado (rodadas 1+2+3+4+5+6+7+8): 270 dos 533 pendentes
resolvidos (~50,7%)** — passou da metade. Restam essencialmente: os ~14
nomes PF documentados como sem pasta/sem CPF localizável (rodadas 6+7+8)
e a grande maioria de PJ (empresas/CNPJ), que é uma busca de natureza
diferente (não está no escopo desta varredura por pasta de médico no
Drive).

### Rodada 9 (2026-07-22, mesmo dia) — últimos nomes de HEMU/HEI/HEJA/HEMNSL/HRP

Troquei `title contains` por `fullText contains` na busca ampla — pega o
nome mesmo quando ele só aparece dentro do conteúdo do documento (CNH,
diploma, certidão), não no título do arquivo/pasta. Resolveu 5 dos 9
nomes que tinham ficado sem solução na rodada 8.

**5 CPFs novos confirmados e já lançados na minuta:**

Andrielle Nunes Santos Gardia (019.955.441-24 — Drive: "Andrielle Nunes
Santos Gadia"), John Pitter Macaelles Duarte Pereira (042.354.641-40 —
Drive: "Macalles"), Jullyana Ricielly Dias Silva (033.904.091-22 —
Drive: "Ricelly"), Ludymilla Candido Ribeiro da Silva (005.814.351-33 —
Drive: "Candida"), Cristiana de Souza Luz Santos (012.951.783-62 —
confirmado em 3 documentos diferentes: Dados Bancários, Certidão de
Casamento e Diploma).

⚠️ **4 nomes seguem sem CPF pessoa física confirmável**: Itallo de
Almeida Pinheiro e Manoel Estevam de Avila Filho (HEMU, nenhuma pasta
localizada), Ana Luisa Peres (HMDAB, nenhuma pasta localizada),
Guilherme Pinto Camargo (SÓCIO — aparece em vários extratos bancários da
H2 Tecnologia recebendo Pix, mas nenhum documento com CPF dele foi
localizado). Mateus Félix Lopes (HEMU) também não fechado: a busca
achou uma pasta "Mateus de Oliveira Lopes" com sobrenome igual mas nome
do meio diferente — não é seguro assumir que é a mesma pessoa, fica como
pendência.

**Total acumulado (rodadas 1+2+3+4+5+6+7+8+9): 275 dos 533 pendentes
resolvidos (~51,6%)**. Restam essencialmente: os ~18 nomes PF
documentados como sem pasta/sem CPF localizável (rodadas 6+7+8+9) e a
grande maioria de PJ (empresas/CNPJ), que é uma busca de natureza
diferente (não está no escopo desta varredura por pasta de médico no
Drive).

### Rodada 10 (2026-07-22, mesmo dia) — confirmações diretas do usuário

O usuário (Gustavo) confirmou diretamente 2 dos 4 nomes que ficaram em
aberto na rodada 9:

- **Guilherme Pinto Camargo** (SÓCIO): CPF 326.902.808-33.
- **Ana Luisa Peres** (HMDAB, linha 816): o usuário não achou pasta com
  esse nome exato, mas identificou que o CPF 078.029.779-24 (já
  presente na minuta na linha 42, sob "ANA LUISA PIRES") provavelmente
  pertence à mesma pessoa — grafia divergente entre "Peres" e "Pires".
  Aplicado o mesmo CPF à linha 816, com nota cruzando as duas entradas
  (mesmo padrão do caso Penedo/Panedo da rodada 5).

Confirmado que **Itallo de Almeida Pinheiro** e **Manoel Estevam de
Avila Filho** (ambos HEMU) seguem sem pasta localizável no Drive — não
há mais tentativa de busca prevista para esses dois nesta frente.

**Total acumulado (rodadas 1+2+3+4+5+6+7+8+9+10): 277 dos 533 pendentes
resolvidos (~52,0%)**. Restam ~16 nomes PF documentados como sem
pasta/sem CPF localizável e a grande maioria de PJ (empresas/CNPJ) —
fora do escopo desta varredura por pasta de médico no Drive.

### Rodada 11 (2026-07-22, mesmo dia) — início da varredura de PJ/CNPJ

Mudança de estratégia: em vez de buscar pasta por pasta de médico
(esgotado na rodada 10), passei a varrer diretamente a pasta única onde
ficam **todos** os Termos de Transferência de Ações já assinados
(tanto de pessoa física quanto de pessoa jurídica) — CNPJ desta pasta:
`170onQ-hGEF68NO5GILqCw_HNrFLUGfZ8`. Paginei ~1.000 arquivos (10 páginas
de 100), extraí automaticamente por regex o nome do
cessionário/cedente e o CPF ou CNPJ do texto de cada termo, e cruzei
contra os nomes ainda pendentes na minuta.

Início manual: **Elian Chiarello Sabbag Ltda** — CNPJ 67.793.213/0001-99
(sócio responsável Elian Chiarello Sabbag, CPF 114.729.099-76),
confirmado diretamente pelo usuário.

**47 CPFs/CNPJs novos confirmados via varredura automática e já
lançados na minuta** — na maioria PJ (empresas), extraídos direto do
texto do termo assinado. Destaque: **Isabella Luanna de Oliveira
Martins** (linha 1071), antes marcada como "sem documentos" (pasta
pessoal vazia), teve o CPF 053.292.261-12 encontrado no Termo de
Transferência já assinado — que fica em local separado da pasta
pessoal do médico no Drive. Isso resolve o caso e mostra que a
varredura pela pasta de termos complementa (não substitui) a busca por
pasta de médico.

**Total acumulado (rodadas 1+2+3+4+5+6+7+8+9+10+11): 325 dos 533
pendentes resolvidos (~61,0%)**. Restam 209 pendentes — a maioria PJ
cujo nome na minuta diverge o suficiente do nome no termo (abreviações,
pontuação, ordem de palavras) para não bater na comparação exata;
próximo passo é uma comparação mais tolerante (fuzzy) contra a mesma
base de ~636 nomes já extraída, antes de partir para buscas
individuais.

Testei o fuzzy match por sobrenome distintivo contra a base de 636
nomes: só 2 dos 21 candidatos batidos automaticamente eram confiáveis
(Marina Belucio Loquette Ltda, João Tadeu F Cruz Servicos Medicos Ltda —
aplicados). Os outros 19 eram falsos positivos claros: iniciais da razão
social não batiam com o nome completo achado (ex.: "VB GARCIA" casou com
"Steffano Alexsander Garcia de Paula" só pelo sobrenome comum). Concluí
que abreviação de razão social é território de risco alto demais pra
automação — decisão do usuário: seguir com busca individual por
empresa, uma a uma, como nas rodadas de CPF.

### Rodada 12 (2026-07-22, mesmo dia) — busca individual por empresa, unidade HMA

Retomei a busca por nome/empresa individual (mesma técnica das rodadas
7-10, agora aplicada a razão social) para os 34 pendentes de HMA,
priorizando por ser a maior unidade restante.

**20 CNPJs/CPFs novos confirmados e já lançados na minuta:** William
Kutney Serviços Médicos Ltda (50.856.829/0001-69), Wilhan Wizniesk
Munari Ltda (63.353.491/0001-74 — Drive: "Wilhan Wizniesk" sem o "i"
final), Debora C S P Santana Serviços Médicos (59.502.281/0001-23),
Eduardo Adriano Ramos Ltda (52.953.303/0001-22), Mariana Fogaça Serviços
Médicos Ltda (62.615.313/0001-01), Kuljis-Kovacevic Serviços Médicos
Ltda (52.226.075/0001-99 — Drive: "Kulis-Kovacevic", um só "L"), Marcos
Antonio Chorates (28.578.106/0001-96), Cardoso & Almeida Atendimentos
Ltda (63.921.601/0001-57), Muraro e Rodrigues Clínica Médica Ltda
(45.392.450/0001-05), A H Ruzzon Martins Ltda (59.206.584/0001-07), Abu
Adiya Saúde Ltda (64.653.626/0001-80), Beatriz Garcia Rocha Ltda
(63.200.271/0001-00), Maria Carolina Campos (61.602.459/0001-50),
Carvalho Rodrigues Ltda (62.208.028/0001-76), Gabriel Santos Costa Ltda
(61.606.175/0001-31), L T A Nogueira Clínica Ltda (42.431.024/0001-45),
Carolina de Lima Bolzon Ltda (58.866.321/0001-53), A S F Feitosa AFMED
(55.485.317/0001-57), Proctoseptímio Serviços Médicos Ltda
(65.751.056/0001-23), Sangalli Serviços Médicos Ltda (CPF pessoal
009.662.839-10, Matheus Leonardo Sangalli).

⚠️ Casos que ficaram de fora desta rodada (ambiguidade genuína, sem
confirmação segura): Maria Y R dos Santos Serviços Médicos Ltda e
Policlínica São José dos Pinhais S/S (ambos com sobrenome/nome comum
demais na base extraída para confirmar sem risco de erro).

**Total acumulado (rodadas 1-12): 345 dos 533 pendentes resolvidos
(~64,7%)**. Restam ~14 nomes PF sem pasta/CPF localizável e ~189 PJ,
a maioria em UPA Pinhais (21), HRE (19) e ~30 unidades pequenas com 1-3
nomes cada — seguindo unidade por unidade com a mesma técnica.

### Rodada 13 (2026-07-22, mesmo dia) — UPA Pinhais fechada (21 de 21)

Mesma técnica da rodada 12, agora na unidade UPA Pinhais. **Fechei
100% dos 21 pendentes desta unidade em uma única rodada** — quase todos
confirmados direto no texto do Termo de Transferência já assinado.

CNPJs/CPFs confirmados: Matheus Hanna Medicina Ltda (55.153.664/0001-82),
G.Andretta Medicina Ltda (62.411.720/0001-05 — sócia Giulli Andretta),
Yuri Augusto Moreira Pena Ltda (58.989.084/0001-18), Maria Fernanda
Vicentine Sovierzoski Ltda (63.535.093/0001-79), Bossei Ltda
(64.478.461/0001-57 — sócia Carolina Bossei), Marina Bueno Serviços
Médicos Ltda (64.527.140/0001-03), João Pedro da Silva Munhoz Ltda
(63.982.679/0001-81), Tammy Shiroma Atividades Médicas Ltda (CPF pessoal
088.710.479-74, termo não usa CNPJ), Karina Matter Sociedade Médica Ltda
(64.500.927/0001-73), Giovana Saliba Serviços Médicos Ltda
(61.217.515/0001-32), Priscila Mitie Nakamura Ltda (63.988.239/0001-31),
Aneli Soluções Médicas Ltda (61.734.481/0001-53 — sócia Maria Laura
Correa Aneli), Giovana Naomi W Ito Médica (65.224.234/0001-68), Rhauana
Munhoz Bertão Ltda (63.288.689/0001-11), Maio, Santos e Antonelli Filho
Clínica Médica Ltda (10.202.533/0001-00), Danielly Carolina Maia Ltda
(65.466.644/0001-15), Rafa Kowalski Ltda (63.332.992/0001-74 — sócia
Rafaela Luisa Kowalski), Luiz Mendonça Serviços Médicos Ltda
(65.507.826/0001-97 — sócio Luiz Felipe Mendonça Cavalheiro), Sergio
Abraham Salinas Torrez Ltda (65.660.864/0001-85), REP Medicina Ltda
(64.680.789/0001-51), APH Medicina Integrada Ltda (66.913.933/0001-88).

**Total acumulado (rodadas 1-13): 366 dos 533 pendentes resolvidos
(~68,7%)**. Restam ~14 nomes PF sem pasta/CPF localizável e ~168 PJ,
concentrados em HRE (19) e ~30 unidades pequenas com 1-3 nomes cada.

### Rodada 14 (2026-07-22, mesmo dia) — HRE fechada (18 de 19)

Mesma técnica, agora na unidade HRE. **Fechei 18 dos 19 pendentes desta
unidade.**

CNPJs/CPFs confirmados: Centro Médico Doctor KC Ltda (44.226.313/0001-38),
Roberta Correia Serviços Médicos (55.893.909/0001-08), Angélica Gusmão
Rocha Ltda (58.317.068/0001-89), Barra Atendimento Intensivo da Saúde
Ltda (19.275.925/0001-73), MPrado Clínica Médica Ltda
(37.949.396/0001-28), LHM Serviços Médicos Ltda (48.688.747/0001-00),
JBC Assistência Médica Ltda (52.284.785/0001-75), FN Serviços Médicos
Ltda (37.712.127/0001-43), B M Viana Serviços em Saúde
(50.392.103/0001-12 — sócio Bruno Martins Viana, diferente do "Ygor
Vicente Viana Silva" que um fuzzy-match anterior tinha sugerido
erroneamente), RCVF Serviços Médicos Ltda (55.558.923/0001-55), Dois
Irmãos Serviços Médicos Ltda (45.786.147/0001-97), Opta Empreendimentos
Médicos Ltda (58.890.134/0001-05), Roni Serviços Médicos Ltda
(59.053.955/0001-50), BMAS Serviços Médicos Ltda (58.938.027/0001-00),
Teddy Serviços Médicos Ltda (24.341.451/0001-50), Letticia Rocha
Serviços Médicos Ltda (CPF pessoal 045.226.955-51, Letticia Hellen Rocha
Silva — havia duas candidatas com nome parecido, escolhida pela grafia
idêntica "Letticia" com dois T), Edinélia F da Silva (CPF pessoal
778.294.845-20 — o termo mostra que ela transferiu as ações
pessoalmente, sem CNPJ; provavelmente cadastrada como PJ na minuta por
engano), Dra Fernanda Fernandes Ltda (26.469.414/0001-58).

⚠️ Único que ficou de fora: **A V Serviços Médicos Ltda** — nenhuma
menção encontrada na varredura (iniciais genéricas demais).

**Total acumulado (rodadas 1-14): 384 dos 533 pendentes resolvidos
(~72,0%)**. Restam ~14 nomes PF sem pasta/CPF localizável e ~150 PJ,
principalmente nas ~30 unidades pequenas com 1-3 nomes cada.

### Rodada 15 — UPA Pinhais (2ª leva) + HMDAB (2026-07-22)

Mesma metodologia (busca individual no Drive por fragmento distintivo do
nome, extração de CNPJ/CPF via Cartão CNPJ / Dados Bancários / Contrato
Social / Termo de Transferência de Ações). 27 confirmados:

**UPA Pinhais**: Clinica Chiesa Ltda (42.369.434/0001-03), Natalie S. Fogaça
Serviços Médicos Ltda (60.979.330/0001-00), Ranieri Ltda (55.856.479/0001-54),
Matheus Berwanger Ltda (58.048.705/0001-69), 55.984.803 Kimberly Massiel
(55.984.803/0001-10), Desiree Medicina Ltda (47.424.683/0001-78), Isabella
Krause Ltda (60.781.483/0001-30), Mariana Vicentini Tzi Lindorfer Ltda
(44.827.922/0001-42), Naira Hurmus Serviços Médicos Ltda (60.052.429/0001-54),
Dra Cecília Zappa Ltda (60.418.234/0001-85), Clinica Médica Faidiga Ltda
(04.511.162/0001-45), I4M Serviços Médicos Ltda (61.347.739/0001-69), D.S.
Medicine Service Ltda (60.623.328/0001-96).

**HMDAB**: VR Lima (49.317.529/0001-22 — pessoa jurídica "VR Lima – Serviços
Médicos Ltda"), Maria Fernanda Urzedo Ribeiro Ltda (56.899.356/0001-63), L
Castilho Simão Serviços Médicos Ltda (61.571.553/0001-99), Miotto & Lima Ltda
(56.430.961/0001-90), Julia Gaioto Serviços Médicos Ltda (63.910.763/0001-90),
Maria Victoria Vilela Perroni Castrechini 12230794655 (65.509.165/0001-39),
Talita Naiara Henrique Ltda (64.307.514/0001-77), Clinica TUF Ltda
(65.611.228/0001-63), NFM Serviços Médicos Ltda (65.220.570/0001-32), Nunes
Assistência Médica Ltda (52.868.227/0001-57), CO Castro Serviços Médicos Ltda
(58.396.695/0001-52), Neisse Serviços Médicos Ltda (54.467.021/0001-40).

Duas exceções tratadas como PF (CPF pessoal aplicado, não CNPJ), seguindo o
mesmo padrão do caso Edinélia (rodada 14): **Sophia Kohler Ltda** — só há
Dados Bancários/documentos com o CPF pessoal dela (098.054.469-64), nenhum
CNPJ localizado; **Vilmar Rosa Lima** — linha distinta de "VR Lima" na
minuta, mas o Contrato Social da "VR Lima Serviços Médicos Ltda" identifica
Vilmar Rosa de Lima como o sócio pessoa física, CPF 965.529.566-49.

⚠️ Dois não resolvidos nesta rodada: **Intelligen Serviços de Saúde Ltda**
(UPA Pinhais, nenhuma pasta/documento localizado) e **Maia e Magalhães
Serviços Médicos Ltda** (HMDAB — encontrada apenas "Maia & Maia Serviços
Médicos Ltda" de outra titular, Mariana Maia Magalhães, CNPJ 24.821.909/0001-79,
mas o nome empresarial não bate com o da minuta; não aplicado por falta de
confirmação segura).

**Total acumulado (rodadas 1-15): 411 dos 533 pendentes resolvidos
(~77,1%)**. Restam 119 pendentes, distribuídos por ~28 unidades.

### Rodada 16 — Itapuí + MHC (2026-07-22)

Mesma metodologia. 19 confirmados:

**Itapuí**: Bacellar Serviços Médicos Ltda (61.562.048/0001-88), Higor Victor
Alexandre de Deus Ltda (63.007.200/0001-96), Felipe Oliveira Vieira Neto -
Serviços Médicos (56.086.271/0001-66), Karen Luísa Parra de Barros Oliveira
Ltda (61.857.901/0001-99), Barbara Rosa Rizato Ltda (63.607.263/0001-83), DML
Serviços Médicos Ltda (53.259.608/0001-00), Instituto de Medicina e
Fonoaudiologia Ocupacional Ltda (01.694.578/0001-58), ACCGS Serviços Médicos
Ltda (61.632.595/0001-92), Alexandre Loury França Serviços Médicos Ltda
(66.764.745/0001-35), Lara Leoni Regodanço Ltda (62.579.410/0001-96).

**MHC**: MDCB Med Serviços Médicos Ltda (37.033.464/0001-04), New Med
Serviços Médicos Ltda (27.679.040/0001-68), FARB Aliança Médica Ltda
(65.798.470/0001-98), Guadiana Serviços Médicos Ltda (11.074.874/0001-00),
Uniangio Serviços Médicos Ltda (37.934.849/0001-42), Maltamed Serviços
Médicos Ltda (50.154.193/0001-03), 2KR Serviços Médicos Ltda
(46.379.846/0001-85), LCA Campodonio Serviços Médicos Ltda
(63.664.119/0001-89), Nauramed Clínica Ltda (09.348.313/0001-00).

⚠️ Um não resolvido: **Solution** (MHC) — nome claramente incompleto/artefato
de digitação na minuta original (sem sobrenome, sem sufixo Ltda), não foi
possível buscar no Drive sem mais contexto identificador.

**Total acumulado (rodadas 1-16): 430 dos 533 pendentes resolvidos
(~80,7%)**. Restam 100 pendentes.

## Nova fonte de CPF/CNPJ (2026-07-21) — extraída direto do banco do h2-termos-web

Puxei direto do Postgres (Neon) de produção do `h2-termos-web.vercel.app`
(tabela `termGenerations`, 15 lotes reais de geração em massa) e do texto de
cada PDF gerado (regex sobre "CPF/CNPJ n.º", excluindo os dados fixos da H2/
Guilherme como representante). Resultado: **1.054 termos com nome + CPF/CNPJ**,
mais completo que os 3 exports manuais usados na reconciliação de 20/07.
Arquivo:
[`2026-07-21-termos-gerados-h2-termos-web-nome-cpf.xlsx`](2026-07-21-termos-gerados-h2-termos-web-nome-cpf.xlsx).

**Ressalvas a considerar antes de usar isso pra fechar o livro:**
- Lotes 6 e 7 (mesmo dia, 2026-06-05) geraram o mesmo número de termo (3187)
  pra mesma pessoa — parecem duas rodadas do mesmo upload; não deduplicado,
  precisa decisão manual de qual é a válida.
- 1 termo (lote 1, nº 3000) saiu com nome literal "Nome" — sobra de
  placeholder dentro de um lote real, marcado na coluna Observação.
- Nota técnica: o `h2-termos-web` em produção roda em Postgres/Neon com uma
  tabela `termGenerations` (um lote por upload de planilha, sem tabela
  normalizada por pessoa) — diferente do código-fonte recuperado localmente
  em `C:\Users\Dell\h2-termos-recuperado`, que assume MySQL e uma tabela
  `termos` por pessoa. Esse código recuperado está desatualizado/diferente
  do que está no ar — não usar como referência do estado atual do sistema.

## Próxima versão do livro
Antes de fechar a próxima versão (novo Termo de Encerramento), reconciliar:
nº de entradas e saídas desde a versão anterior (usando a tabela de
movimentações acima) deve bater com a diferença entre os dois snapshots.
Mencionar essa reconciliação no novo Termo de Encerramento.
