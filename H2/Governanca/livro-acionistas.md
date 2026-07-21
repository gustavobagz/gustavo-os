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
| 2026-07-21 (minuta, não fechada) | 2.232 | 23.170 | `2026-07-21-MINUTA-livro-acionistas-reconstruido.xlsx` / `.pdf` | Reconstruída do zero a partir do livro de 28/02/2025 (única base confiável) + todos os Termos de Adesão/Saída confirmados na `TERMOS SA.xlsx` + CPF/CNPJ cruzado com 4 fontes (ver metodologia abaixo). **Ainda não é o livro oficial** — falta CPF/CNPJ de 658 pessoas e algumas pendências pontuais (ver double-check abaixo). |

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
- 📋 **658 dos 1.530 novos entrantes continuam sem CPF/CNPJ** — cruzados
  contra 4 fontes (`TESTE_backup_antes_MHC.xlsx`,
  `ATT-CPF_CNPJ_Socios_H2_ATUALIZADA.xlsx` e os 3 exports do
  `h2-termos-web`) e ainda não encontrados em nenhuma. **O livro não pode
  ser fechado/assinado enquanto isso não for resolvido** — falta
  identificação do titular é o requisito central do art. 100, I, da Lei
  6.404/76. Lista completa (com nome, ações, origem/status do termo) na
  planilha, coluna `cpf_cnpj = "A CONFIRMAR"`.

Arquivo de dados: [`2026-07-21-MINUTA-livro-acionistas-reconstruido.xlsx`](2026-07-21-MINUTA-livro-acionistas-reconstruido.xlsx).
Documento formatado (minuta, não assinável ainda):
[`2026-07-21-MINUTA-livro-acionistas-reconstruido.pdf`](2026-07-21-MINUTA-livro-acionistas-reconstruido.pdf).

## Próxima versão do livro
Antes de fechar a próxima versão (novo Termo de Encerramento), reconciliar:
nº de entradas e saídas desde a versão anterior (usando a tabela de
movimentações acima) deve bater com a diferença entre os dois snapshots.
Mencionar essa reconciliação no novo Termo de Encerramento.
