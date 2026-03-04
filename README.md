# Teste Econverse - Vaga Desenvolvedor Front-End

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-End na Econverse.

## 📋 Descrição

Aplicação React + TypeScript que implementa uma vitrine de produtos com as seguintes funcionalidades:

- Exibição de produtos em grid responsivo
- Modal interativo com detalhes do produto
- Consumo de dados via arquivo JSON
- Estilos com SASS
- HTML semântico e boas práticas de SEO

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript para tipagem estática
- **SASS** - Pré-processador CSS para estilos
- **HTML5 Semântico** - Estrutura acessível e otimizada para SEO

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ProductCard/          # Card individual do produto
│   ├── ProductModal/         # Modal com detalhes do produto
│   └── ProductShowcase/      # Grid principal de produtos
├── data/
│   └── products.json         # Dados dos produtos
├── types/
│   └── Product.ts            # Tipagem TypeScript
├── App.tsx                   # Componente principal
└── App.scss                  # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <URL-do-repositorio>
cd teste-econverse
```

2. Instale as dependências:
```bash
npm install
```

### Executando o Projeto

#### Modo Desenvolvimento
```bash
npm start
```
A aplicação será iniciada em `http://localhost:3000`

#### Build para Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `build/`

#### Executar Testes
```bash
npm test
```

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios

- [x] Projeto React + TypeScript
- [x] Vitrine de produtos consumindo JSON
- [x] Modal interativo com detalhes
- [x] Uso de pré-processador SASS
- [x] Layout responsivo
- [x] Componentização

### ✅ Pontos Extras

- [x] Boas práticas de SEO
- [x] HTML semântico
- [x] Acessibilidade
- [x] Performance otimizada

## 📱 Compatibilidade

- Chrome/Chromium (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Edge (últimas versões)
- Navegadores móveis

## 🎨 Design

A aplicação segue princípios de design moderno com:

- Layout limpo e responsivo
- Cores consistentes com a marca Econverse
- Tipografia legível
- Interações suaves e feedback visual

## 📊 Estrutura de Dados

Os produtos seguem a seguinte estrutura:

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  sizes?: string[];
  colors: string[];
}
```

## 🔧 Configuração

O projeto utiliza configuração padrão do Create React App com as seguintes personalizações:

- SASS configurado para processamento de estilos
- TypeScript para tipagem segura
- Import de arquivos JSON habilitado

## 📝 Notas de Desenvolvimento

- Componentes desenvolvidos following atomic design principles
- Código modular e reutilizável
- Performance otimizada com lazy loading
- Tratamento de erros implementado
- Loading states para melhor UX

---

**Desenvolvido por:** [Seu Nome]  
**Data:** Março 2026  
**Propósito:** Teste prático para vaga Front-End na Econverse
