# Park Plus Estacionamentos — Site

Site institucional da **Park Plus Estacionamentos**, empresa de administração de estacionamentos fundada em 1998 em São Paulo. Reconstrução completa do site anterior (WordPress) como aplicação React moderna, com conteúdo separado de estrutura para facilitar manutenção futura.

🔗 Site original: [parkplus.com.br](https://www.parkplus.com.br/)

## Stack

- **React 19** + **Vite**
- **React Router 7** — roteamento entre páginas
- **Tailwind CSS v4** — configurado via `@theme` em `index.css` (não usa `tailwind.config.js`)
- **Framer Motion** — animações e transições

## Estrutura do projeto

```
src/
├── assets/
│   ├── logo-light.png / logo-dark.png
│   └── Unidades/            # fotos das unidades (atenção: "U" maiúsculo)
├── components/
│   ├── Card.jsx
│   ├── BackToTop.jsx
│   ├── ScrollToTop.jsx
│   ├── WhatsAppButton.jsx
│   ├── VideoSection.jsx
│   ├── Faq.jsx
│   ├── SomosDiferentes.jsx
│   ├── LocationsPattern.jsx
│   ├── ParallaxSlideshow.jsx
│   ├── IntroSplash.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Unidades.jsx
│   ├── Gestao.jsx
│   ├── Sobre.jsx
│   └── Convenios.jsx
├── conteudo.js               # todo o conteúdo textual do site, centralizado
└── App.jsx
```

## Por que o conteúdo fica separado (`conteudo.js`)

Textos, dados de unidades, FAQ e estatísticas vivem em `conteudo.js`. Isso permite atualizar informações (endereços, telefone, texto institucional) sem tocar em nenhum componente.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview   # testa o build localmente antes do deploy
```

## Deploy

Projeto configurado para deploy na **Vercel** (detecção automática de Vite). Como usa React Router com rotas client-side, é necessário um rewrite para SPA — ver `vercel.json` na raiz do projeto.