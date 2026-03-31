# 🌿 Floresta - Site de Turismo e Hospedagem

> Um website moderno e responsivo para experiências de turismo ecológico em floresta, desenvolvido com React, TypeScript e Tailwind CSS.

## ✨ Características

- 🎥 **Vídeo de Fundo Dinâmico** - Vídeos diferentes baseados na temperatura/clima
- 📱 **Design Responsivo** - Totalmente otimizado para desktop, tablet e mobile
- 🎨 **Interface Moderna** - Design elegante com paleta de cores verde natural
- ⚡ **Performance Otimizada** - Construído com Vite para desenvolvimento rápido
- 📖 **Scroll Suave** - Navegação fluida entre seções
- 🏠 **Seções Completas** - Incluindo acomodações, eventos, experiências, contato e mais

## 🚀 Início Rápido

### Pré-requisitos

- Node.js (versão 16+)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd tailwindcss
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa verificações de linting

## 🏗️ Estrutura do Projeto

```
📁 src/
├── 📁 components/
│   ├── Acomodacoes.tsx      # Seção de hospedagem
│   ├── CicloNatural.tsx     # Seção do ciclo natural
│   ├── Contato.tsx          # Formulário de contato
│   ├── Eventos.tsx          # Eventos disponíveis
│   ├── Experiencias.tsx     # Experiências oferecidas
│   ├── Footer.tsx           # Rodapé
│   ├── Header.tsx           # Cabeçalho/Navegação
│   ├── Hero.tsx             # Seção hero
│   ├── Introducao.tsx       # Seção de introdução com vídeo
│   ├── MobileMenu.tsx       # Menu mobile responsivo
│   ├── Parceiros.tsx        # Parceiros/Sponsors
│   └── Video.tsx            # Componente de vídeo dinâmico
├── 📁 assets/               # Imagens e ícones
├── App.tsx                  # Componente principal
├── App.css                  # Estilos globais e animações
└── main.tsx                 # Ponto de entrada
```

```
📁 public/
└── 📁 img/
    ├── video_chuva.mp4      # Vídeo para dias chuvosos
    ├── video_sol.mp4        # Vídeo para dias ensolarados
    └── 📁 parceiros/        # Logos de parceiros
```

## 🎨 Tecnologias Utilizadas

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática e segura
- **Tailwind CSS 4** - Framework de estilos utilitários
- **Vite** - Build tool rápido com Hot Module Replacement
- **React Icons** - Ícones versáteis
- **Lucide React** - Ícones modernos adicionais
- **ESLint** - Linting e verificação de código

## 🌍 Paleta de Cores

A aplicação utiliza uma paleta de cores verde natural baseada na floresta:

```css
--color-verde-200: #acef75 /* Verde claro */ --color-verde-300: #91ee77
  /* Verde menta */ --color-verde-400: #6fbf94 /* Verde média */
  --color-verde-500: #3f8f6b /* Verde floresta */ --color-verde-600: #2f6e52
  /* Verde escuro */ --color-verde-700: #2e482c /* Verde muito escuro */
  --color-verde-800: #16281f /* Verde quase preto */ --color-verde-900: #0f1c15
  /* Verde muito escuro */ --color-verde-950: #030504 /* Quase preto */;
```

## 🎬 Componentes Principais

### Video.tsx

Renderiza vídeos de fundo dinâmicos baseados em condições climáticas aleatórias. O componente:

- Gera um número aleatório para simular temperatura
- Seleciona `video_chuva.mp4` ou `video_sol.mp4`
- Renderiza apenas quando o src está carregado

### Introducao.tsx

Seção hero com:

- Vídeo de fundo dinâmico
- Overlay de gradiente preto (de baixo para cima)
- Conteúdo principal centralizado
- Responsivo para todos os tamanhos

### Header.tsx

Barra de navegação com:

- Menu desktop completo
- Menu mobile responsivo via `MobileMenu.tsx`
- Links de navegação suave

## 📱 Responsividade

O projeto utiliza Tailwind CSS para garantir responsividade:

- **Mobile**: Até 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## ⚙️ Configurações

### Vite Config

```typescript
plugins: [react(), tailwindcss()];
```

### Tailwind CSS

- Integrado via `@tailwindcss/vite`
- Suporte a custom colors (verde-200 até verde-950)
- Animações customizadas (fade-in)

## 🐛 Troubleshooting

### Vídeo não aparece

- Verifique se os arquivos existem: `public/img/video_chuva.mp4` e `video_sol.mp4`
- Inspect Element → Network → Verifique se os vídeos estão carregando
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Reinicie o servidor: `npm run dev`

### Estilos Tailwind não aplicam

- Confirme `@import 'tailwindcss'` está em `src/App.css`
- Verifique se o arquivo está sendo importado em `src/main.tsx`
- Restart do servidor Vite

### Hot Reload não funciona

- Feche e reincie o servidor: `npm run dev`
- Verifique se Vite está rodando na porta 5173

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

Isto vai gerar a pasta `dist/` pronta para deploy.

### Plataformas Recomendadas

- **Vercel** - Deploy zero-config
- **Netlify** - Build automático do Git
- **GitHub Pages** - Hospedagem gratuita
- **AWS Amplify** - Deploy e hosting

## 📝 Variáveis de Ambiente

Crie um arquivo `.env` se necessário:

```
VITE_API_URL=https://seu-backend-aqui.com
```

## 🤔 Próximos Passos

- [ ] Integração com backend para dados reais
- [ ] Formulário de contato funcional
- [ ] Integração com email/SMS
- [ ] Dashboard de admin
- [ ] Reservas online
- [ ] Autenticação de usuários

## 📄 Licença

Este projeto é privado. Consulte a equipe para detalhes de licença.

## 👥 Contato

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento.

---

⭐ Se este projeto foi útil, considere deixar uma estrela no GitHub!
