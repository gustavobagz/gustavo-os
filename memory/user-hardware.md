---
name: PC hardware profile
description: Especificações do PC principal do usuário (CPU/GPU/RAM/SSD/OS) e ferramentas de assinatura digital instaladas
type: user
originSessionId: b474a519-53bb-4fcd-bbde-6a7938552561
---
PC principal do Gustavo (Windows 11 Pro 22621 / 22H2):

- **CPU**: AMD Ryzen 5 5500 (6 núcleos / 12 threads, 3.6 GHz base)
- **GPU**: NVIDIA GeForce RTX 5060 (driver 32.0.15.9621)
- **RAM**: 16 GB
- **SSD**: NVMe 476 GB (modelo PCH-RVRS-512)
- **Plano de energia ativo**: Alto desempenho

Ferramentas de assinatura digital / certificado no startup — provavelmente ligadas ao trabalho profissional (e.g. assinatura de documentos médicos, dado o skill `extract-cadastro-medicos`):
- Valid Agent Server (`vagent.exe`)
- ePass2003 (`ePassCertd_2003.exe`)
- SafeNet Authentication (`SACMonitor.exe`)
- CertificateRegistration (`aetcrss1.exe`)

NÃO sugerir desabilitar esses itens sem checar com o usuário — quebram fluxos de certificado A3/token.
