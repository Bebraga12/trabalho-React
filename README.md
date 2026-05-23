# The Brew House — Trabalho Prático de React.js

Aplicação web de uma cafeteria fictícia chamada **The Brew House**, desenvolvida como atividade acadêmica para a disciplina de Tópicos Avançados.

---

## Tecnologias utilizadas

- **React.js** com Vite
- **JavaScript** (sem TypeScript)
- **React Router DOM** para navegação entre páginas
- **CSS puro** para estilização (sem bibliotecas de UI)

---

## Como instalar e rodar

```bash
# Instalar as dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Estrutura de arquivos

```
src/
├── components/
│   ├── Accordion.jsx
│   ├── Dropdown.jsx
│   ├── Pagination.jsx
│   ├── ProgressBar.jsx
│   ├── Tabs.jsx
│   └── Toast.jsx
├── pages/
│   ├── Home.jsx
│   ├── Cardapio.jsx
│   └── Sobre.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/cardapio` | Cardápio |
| `/sobre` | Sobre |

A navegação é gerenciada pelo **React Router DOM** com `BrowserRouter`, `Routes`, `Route` e `NavLink`. O `NavLink` aplica automaticamente a classe `ativo` no link da página atual.

---

## Componentes

### Accordion

**Arquivo:** `src/components/Accordion.jsx`

**Onde é usado:** Página Cardápio, na seção de Perguntas Frequentes.

**Funcionamento:** Recebe um array de objetos com `titulo` e `conteudo` via props. Apenas um item pode estar aberto por vez. Ao clicar em um item já aberto, ele fecha.

**Hooks utilizados:** `useState` — armazena o índice do item aberto. O valor `null` indica que nenhum item está aberto.

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `itens` | `Array` | Array de objetos com `titulo` (string) e `conteudo` (string) |

**Acessibilidade:** `aria-expanded` no botão indica se o item está aberto ou fechado.

---

### Pagination

**Arquivo:** `src/components/Pagination.jsx`

**Onde é usado:** Dentro do componente `ListaProdutos`, na página Cardápio, para paginar os itens de cada aba do cardápio.

**Funcionamento:** Exibe botões numerados para cada página, além dos botões "Anterior" e "Próxima". O botão "Anterior" fica desabilitado na primeira página e o botão "Próxima" fica desabilitado na última.

**Hooks utilizados:** Nenhum. É um componente controlado — o estado da página atual é gerenciado externamente pelo componente pai (`ListaProdutos`).

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `totalPaginas` | `number` | Quantidade total de páginas |
| `paginaAtual` | `number` | Número da página atualmente selecionada |
| `aoMudarPagina` | `function` | Função chamada ao clicar em uma página, recebe o número da nova página |

**Acessibilidade:** `aria-label` em cada botão, `aria-current="page"` na página ativa, `disabled` nos botões de navegação quando no limite.

---

### ProgressBar

**Arquivo:** `src/components/ProgressBar.jsx`

**Onde é usado:** Página Cardápio (programa de fidelidade ao vivo) e Página Sobre (índices de satisfação).

**Funcionamento:** Recebe um valor entre 0 e 100 e renderiza uma barra preenchida proporcionalmente. O preenchimento é animado via CSS (`transition: width 0.6s ease`). Na página Cardápio, o valor é atualizado a cada item adicionado ao pedido, fazendo a barra avançar em tempo real. Ao atingir 10 itens, o contador zera.

**Hooks utilizados:** Nenhum. É um componente puramente visual e controlado pelo pai.

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `valor` | `number` | Percentual de preenchimento (0 a 100) |
| `rotulo` | `string` | Texto exibido acima da barra |

**Acessibilidade:** `role="progressbar"`, `aria-valuenow`, `aria-valuemin` e `aria-valuemax` na trilha da barra.

---

### Tabs

**Arquivo:** `src/components/Tabs.jsx`

**Onde é usado:** Página Cardápio, para separar os itens do cardápio em três categorias: Cafés, Doces e Salgados.

**Funcionamento:** Recebe um array de abas, cada uma com `titulo` e `conteudo`. Ao clicar em uma aba, o painel de conteúdo correspondente é exibido.

**Hooks utilizados:** `useState` — armazena o índice da aba ativa. O valor inicial é `0` (primeira aba).

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `abas` | `Array` | Array de objetos com `titulo` (string) e `conteudo` (ReactNode) |

**Acessibilidade:** `role="tablist"` na lista, `role="tab"` nos botões, `role="tabpanel"` no painel, `aria-selected` na aba ativa, `aria-controls` e `aria-labelledby` ligando cada aba ao seu painel.

---

### Dropdown

**Arquivo:** `src/components/Dropdown.jsx`

**Onde é usado:** Página Cardápio, para selecionar o tipo de pedido (Consumir no local, Retirada no balcão ou Delivery).

**Funcionamento:** Abre e fecha ao clicar no gatilho. Fecha automaticamente ao selecionar uma opção. Fecha também ao clicar fora do componente. Exibe a opção selecionada no gatilho.

**Hooks utilizados:**
- `useState` — armazena se o menu está aberto e qual opção está selecionada.
- `useEffect` — adiciona um listener de `mousedown` no `document` para detectar clique fora e fechar o menu. O listener é removido na função de limpeza do `useEffect`.
- `useRef` — referência ao elemento DOM do componente, usada para verificar se o clique foi dentro ou fora dele.

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `opcoes` | `Array<string>` | Lista de opções exibidas no menu |
| `rotulo` | `string` | Texto do label exibido acima do gatilho |

**Acessibilidade:** `aria-haspopup="listbox"` e `aria-expanded` no botão gatilho, `role="listbox"` na lista, `role="option"` e `aria-selected` em cada item.

---

### Toast

**Arquivo:** `src/components/Toast.jsx`

**Onde é usado:** Página Cardápio, disparado ao clicar em "+ Adicionar" em qualquer produto, e ao completar 10 itens no programa de fidelidade.

**Funcionamento:** Aparece no canto inferior direito da tela. Some automaticamente após o tempo definido em `duracao`. Pode ser fechado manualmente pelo botão "✕". O arquivo exporta dois componentes: `Toast` (notificação individual) e `ToastContainer` (gerencia a lista de toasts ativos).

**Hooks utilizados:**
- `useState` — controla se o toast está visível.
- `useEffect` — cria o timer de fechamento automático com `setTimeout`. O timer é cancelado na função de limpeza do `useEffect`.

**Props do Toast:**
| Prop | Tipo | Descrição |
|---|---|---|
| `mensagem` | `string` | Texto exibido na notificação |
| `tipo` | `string` | Variante visual: `'sucesso'`, `'erro'` ou `'info'` |
| `duracao` | `number` | Tempo em milissegundos até fechar automaticamente (padrão: 3000) |
| `aoFechar` | `function` | Função chamada quando o toast é removido |

**Props do ToastContainer:**
| Prop | Tipo | Descrição |
|---|---|---|
| `toasts` | `Array` | Lista de objetos com `id`, `mensagem`, `tipo` e `duracao` |
| `aoRemover` | `function` | Função chamada com o `id` do toast a ser removido |

**Acessibilidade:** `role="alert"` e `aria-live="polite"` para leitura automática por leitores de tela.

---

## Páginas

### Home (`/`)

Página inicial da cafeteria. Contém:
- Seção hero com nome da cafeteria, descrição e links para as demais páginas. A xícara exibida no hero é desenhada inteiramente com CSS (sem imagem ou SVG) e possui duas animações: flutuação vertical e vapor.
- Seção de diferenciais com três cards.
- Seção do programa de fidelidade com texto explicativo e link para o cardápio.
- Seção de destaques da semana com três produtos.

### Cardápio (`/cardapio`)

Página principal da aplicação, onde todos os seis componentes obrigatórios estão integrados:

| Componente | Uso na página |
|---|---|
| Dropdown | Seleção do tipo de pedido |
| Tabs | Separação do cardápio em Cafés, Doces e Salgados |
| Pagination | Paginação dos itens dentro de cada aba (3 itens por página) |
| ProgressBar | Programa de fidelidade ao vivo |
| Accordion | Perguntas frequentes |
| Toast | Notificação ao adicionar item ou completar 10 compras |

**Lógica do programa de fidelidade:** O estado `cafesAcumulados` começa em 4. Cada clique em "+ Adicionar" incrementa esse valor em 1. O percentual exibido na `ProgressBar` é calculado como `(cafesAcumulados / 10) * 100`. Ao atingir 10, um toast de parabéns é exibido e o contador volta a 0.

### Sobre (`/sobre`)

Página institucional. Contém:
- Seção de história da cafeteria.
- Painel lateral com números (anos, unidades, baristas, xícaras).
- Seção de valores com quatro cards.
- Seção de satisfação com quatro barras de progresso estáticas.
- Seção da equipe com três membros, cada um com avatar de iniciais em CSS.
- Seção de contato com endereços das três unidades.

---

## Conceitos de React utilizados

| Conceito | Onde aparece |
|---|---|
| `useState` | Accordion, Tabs, Dropdown, Toast, Cardapio |
| `useEffect` | Dropdown (fechar ao clicar fora), Toast (timer de fechamento) |
| `useRef` | Dropdown (referência ao elemento DOM) |
| `useCallback` | Cardapio (estabiliza `adicionarToast` e `removerToast`) |
| Props | Todos os componentes recebem dados via props |
| Eventos | `onClick` em todos os componentes, `onMouseDown` no Dropdown |
| Componente controlado | Pagination e ProgressBar (estado gerenciado pelo pai) |
| Renderização condicional | Accordion (conteúdo), Dropdown (lista), Toast (visibilidade) |
| Renderização de listas | Accordion, Pagination, Tabs, Dropdown, ListaProdutos |

---

## HTML semântico

| Tag | Uso |
|---|---|
| `<header>` | Barra de navegação |
| `<nav>` | Menu de links de navegação |
| `<main>` | Conteúdo principal de cada página |
| `<section>` | Divisão temática dentro das páginas |
| `<article>` | Cards de produtos, membros da equipe e valores |
| `<aside>` | Painel de números na página Sobre |
| `<footer>` | Rodapé do site |
| `<address>` | Informações de contato das unidades |

---

## Responsividade

O layout se adapta a três tamanhos de tela via media queries em `index.css`:

| Breakpoint | Comportamento |
|---|---|
| Acima de 768px | Layout de duas colunas no hero e nas grids |
| Até 768px | Hero em coluna única, grids empilhadas, dropdown ocupa largura total |
| Até 480px | Fonte e espaçamentos reduzidos, abas do Tabs compactas |
