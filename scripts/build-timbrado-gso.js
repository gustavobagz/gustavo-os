// Timbrado GSO Advogados — construído do zero com a identidade nova.
// Header: logo + fio bronze · Footer: fio bronze + contatos em micro-caps.
// Corpo: Calibri 12, entrelinha 1,5, recuo 1ª linha 1701, justificado (CLAUDE.md).
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Header, Footer,
  AlignmentType, BorderStyle,
} = require(path.join(process.env.APPDATA, "npm", "node_modules", "docx"));

const GRAFITE = "1C2127";
const BRONZE = "A57B45";
const CINZA = "5A6068";

const LOGO = fs.readFileSync(
  "c:\\Users\\Dell\\gustavo\\Escritorio\\Institucional\\logo-gso-principal.png"
);

// ---------- helpers ----------
const micro = (text, opts = {}) =>
  new TextRun({
    text,
    font: "Segoe UI",
    size: 13, // 6,5pt
    color: opts.color || CINZA,
    characterSpacing: 24, // ~1,2pt de tracking
    ...opts,
  });

const sep = () => micro("   ·   ", { color: BRONZE });

const corpo = (children, extra = {}) =>
  new Paragraph({
    children,
    alignment: AlignmentType.JUSTIFIED,
    spacing: { line: 360, before: 0, after: 0 }, // 1,5
    indent: { firstLine: 1701 },
    ...extra,
  });

const vazio = () => new Paragraph({ spacing: { line: 360 }, children: [] });

// ---------- header ----------
const header = new Header({
  children: [
    new Paragraph({
      children: [
        new ImageRun({
          type: "png",
          data: LOGO,
          transformation: { width: 158, height: 89 }, // ~4,2 cm, proporção 1,779
          altText: {
            title: "GSO Advogados",
            description: "Logomarca GSO Advogados",
            name: "logo-gso",
          },
        }),
      ],
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [],
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 4, color: BRONZE, space: 1 },
      },
      spacing: { after: 0 },
    }),
  ],
});

// ---------- footer ----------
const footer = new Footer({
  children: [
    new Paragraph({
      children: [],
      border: {
        top: { style: BorderStyle.SINGLE, size: 4, color: BRONZE, space: 1 },
      },
      spacing: { after: 100 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        micro("ED. QS TOWER OFFICE"),
        sep(),
        micro("R. 72, Nº 223, SALAS 1901/1902"),
        sep(),
        micro("JARDIM GOIÁS"),
        sep(),
        micro("GOIÂNIA/GO"),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        micro("CEP 74.805-480"),
        sep(),
        micro("(62) 99366-4193"),
        sep(),
        micro("ggsoliveira35@gmail.com"),
        sep(),
        micro("OAB/GO 66.404", { color: BRONZE }),
      ],
    }),
  ],
});

// ---------- documento ----------
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Calibri", size: 24 } }, // 12pt
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: {
            top: 2495,    // ~4,4 cm (libera o header)
            bottom: 1985, // ~3,5 cm (libera o footer)
            left: 1701,   // 3 cm
            right: 1701,  // 3 cm
            header: 567,  // 1 cm
            footer: 567,
          },
        },
      },
      headers: { default: header },
      footers: { default: footer },
      children: [
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { line: 360 },
          children: [
            new TextRun({
              text: "[ENDEREÇAMENTO — ex.: AO JUÍZO DA Xª VARA CÍVEL DA COMARCA DE XXX, ESTADO DE GOIÁS]",
              bold: true,
            }),
          ],
        }),
        vazio(),
        vazio(),
        new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { line: 360 },
          children: [
            new TextRun({ text: "Processo nº ", bold: true }),
            new TextRun({ text: "[NÚMERO DO PROCESSO]", bold: true }),
          ],
        }),
        vazio(),
        vazio(),
        corpo([
          new TextRun(
            "[PARTE], [qualificação], por intermédio de seu advogado infra-assinado, vem, respeitosamente, à presença deste Douto Juízo, [CORPO DA PETIÇÃO]."
          ),
        ]),
        vazio(),
        corpo([new TextRun("Nestes termos, pede e espera deferimento.")]),
        vazio(),
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { line: 360 },
          children: [new TextRun("Goiânia/GO, [DIA] de [MÊS] de [ANO].")],
        }),
        vazio(),
        vazio(),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 276, after: 0 },
          children: [
            new TextRun({ text: "GUSTAVO G. SANTOS DE OLIVEIRA", bold: true, color: GRAFITE }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 276, after: 0 },
          children: [new TextRun({ text: "OAB/GO 66.404", color: GRAFITE })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { line: 276 },
          children: [
            new TextRun({ text: "(Assinado digitalmente)", italics: true, color: CINZA }),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  const out = "c:\\Users\\Dell\\gustavo\\Escritorio\\Modelos\\timbrado-gso.docx";
  fs.writeFileSync(out, buf);
  console.log("OK:", out, buf.length, "bytes");
});
