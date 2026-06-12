# Na Saúde por Aí — Mockup v1

Site comercial da marca "Na Saúde por Aí" — mockup navegável de alta fidelidade visual.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home com todos os blocos |
| `/simulados` | Página de venda da plataforma |
| `/editais` | Hub de editais filtráveis |
| `/sobre` | Minha História (autoridade) |

## O que é mock nesta fase

- **Dados**: todos em `src/data/` (editais, depoimentos, produtos) — estáticos, sem API
- **Imagens**: placeholders de marca (sem fotos reais) — substituir pelo retrato da creator
- **ProductMockup** (`src/components/home/ProductMockup.jsx`): representação animada da interface do simulado — substituir pelo vídeo-demo real quando disponível
- **Formulário de lead**: captura o e-mail no estado local sem enviar para backend

## Pontos de conexão ao back-end (fase 2)

| Ponto | Arquivo | O que conectar |
|---|---|---|
| Captura de lead | `src/components/home/LeadCapture.jsx` | handleSubmit → API de e-mail/WhatsApp |
| Dados de editais | `src/data/editais.js` | Substituir por fetch da API/CMS |
| Checkout simulado | `src/pages/SimuladoPage.jsx` | Botão CTA → integração de pagamento |
| Vídeo-demo | `src/components/home/ProductMockup.jsx` | Trocar por video/embed real |

## Stack

- React 18 + Vite
- Tailwind CSS v3 + tokens em `src/styles/tokens.css`
- React Router v6
- Framer Motion
- lucide-react
- Google Fonts: Fraunces · DM Sans · DM Mono · Caveat
