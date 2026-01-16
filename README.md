# 🚀 Space Tourism Website

Um site interativo sobre turismo espacial, desenvolvido com React e CSS moderno. Explore diferentes destinos espaciais, conheça a tripulação e descubra mais sobre as tecnologias utilizadas nas missões espaciais.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript para construção de interfaces dinâmicas
- **React Hooks** - `useState` para gerenciamento de estado
- **CSS3** - Estilos responsivos e animações
- **HTML5** - Estrutura semântica do site
- **JavaScript ES6+** - Lógica interativa

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node)

Verifique as versões instaladas:

```bash
node --version
npm --version
```

## 🚀 Como Iniciar o Projeto

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd space-tourism
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

O site abrirá automaticamente em [http://localhost:3000](http://localhost:3000)

### 4. Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos compilados estarão na pasta `build/`

## 📁 Estrutura do Projeto

```
space-tourism/
├── public/
│   ├── index.html          # Arquivo HTML principal
│   └── manifest.json       # Configuração PWA
├── src/
│   ├── components/
│   │   ├── Home.jsx        # Página inicial
│   │   ├── Destination.jsx # Explorar destinos
│   │   ├── Crew.jsx        # Conhecer a tripulação
│   │   ├── Technology.jsx  # Tecnologias das missões
│   │   ├── Header.jsx      # Cabeçalho/Navegação
│   │   ├── Home.css
│   │   ├── Destination.css
│   │   ├── Crew.css
│   │   ├── Technology.css
│   │   └── Header.css
│   ├── assets/
│   │   ├── destination/    # Imagens dos planetas
│   │   ├── crew/           # Imagens da tripulação
│   │   ├── technology/     # Imagens das tecnologias
│   │   └── shared/         # Imagens compartilhadas
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos globais
│   └── index.js            # Ponto de entrada
├── package.json            # Dependências do projeto
└── README.md              # Este arquivo
```

## ✨ Funcionalidades

### 🌍 Destinos (Destination)
- Explore diferentes planetas (Lua, Marte, Europa, Titã)
- Visualize imagens em alta qualidade
- Navegue entre destinos com abas clicáveis
- Veja distância média e tempo estimado de viagem
- Design responsivo para mobile e desktop

### 👨‍🚀 Tripulação (Crew)
- Conheça os membros da tripulação
- Navegue entre diferentes astronautas
- Veja cargo, nome e biografia de cada membro
- Dots de navegação para seleção rápida
- Layout adaptativo para diferentes tamanhos de tela

### 🛸 Tecnologias (Technology)
- Descubra as tecnologias utilizadas nas missões
- Informações detalhadas sobre cada tecnologia
- Interface interativa e responsiva

### 📱 Design Responsivo
- Desktop (1024px+) - Layout em colunas lado a lado
- Tablet (768px - 1023px) - Layout adaptado
- Mobile (< 768px) - Layout em coluna com navegação facilitada

## 🎨 Animações e Efeitos

- Flutuação suave das imagens
- Transições de cores nos botões
- Efeitos hover nos elementos interativos
- Underline animado nas tabs ativas
- Fade-in ao carregar imagens

## 🔧 Scripts Disponíveis

```bash
# Iniciar desenvolvimento
npm start

# Rodar testes
npm test

# Build para produção
npm run build

# Ejetar configuração (não é reversível)
npm run eject
```

## 📱 Responsividade

O projeto foi desenvolvido com "Mobile First":

| Breakpoint | Tipo | Largura |
|-----------|------|---------|
| Mobile | Pequenas telas | < 768px |
| Tablet | Médias telas | 768px - 1023px |
| Desktop | Telas grandes | 1024px+ |

## 🎯 Como Usar

1. **Na página inicial** - Clique em "Explore" ou navegue pelo menu
2. **Destinos** - Clique nas abas (MOON, MARS, etc) para trocar de planeta
3. **Tripulação** - Clique nos nomes ou dots para conhecer cada astronauta
4. **Tecnologias** - Veja as tecnologias utilizadas nas missões

## 🚀 Deploy

### Opção 1: Vercel
```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify
```bash
npm run build
# Arraste a pasta 'build' para Netlify
```

### Opção 3: GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
```

## 📝 Notas Importantes

- As imagens estão otimizadas em `.png` e `.webp`
- O site utiliza CSS Grid e Flexbox para layout responsivo
- Todos os componentes utilizam React Hooks
- Não há dependências externas além do React

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos canais oficiais.


