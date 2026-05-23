import { useState, useCallback } from 'react'
import Accordion from '../components/Accordion'
import Pagination from '../components/Pagination'
import ProgressBar from '../components/ProgressBar'
import Tabs from '../components/Tabs'
import Dropdown from '../components/Dropdown'
import { ToastContainer } from '../components/Toast'

const ITENS_POR_PAGINA = 3

const CAFES = [
  { nome: 'Espresso', descricao: 'Café puro, intenso e encorpado.', preco: 'R$ 6,00' },
  { nome: 'Cappuccino', descricao: 'Espresso com leite vaporizado e espuma cremosa.', preco: 'R$ 10,00' },
  { nome: 'Latte', descricao: 'Espresso suave com muito leite vaporizado.', preco: 'R$ 11,00' },
  { nome: 'Flat White', descricao: 'Espresso duplo com pouco leite texturizado.', preco: 'R$ 12,00' },
  { nome: 'Mocha', descricao: 'Espresso com chocolate e leite vaporizado.', preco: 'R$ 13,00' },
  { nome: 'Cold Brew', descricao: 'Café extraído a frio por 12 horas. Suave e refrescante.', preco: 'R$ 14,00' },
  { nome: 'Affogato', descricao: 'Uma bola de sorvete de baunilha afogada em espresso quente.', preco: 'R$ 16,00' },
  { nome: 'Macchiato', descricao: 'Espresso "manchado" com um toque de leite espumado.', preco: 'R$ 8,00' },
  { nome: 'Ristretto', descricao: 'Versão mais concentrada e curta do espresso clássico.', preco: 'R$ 7,00' },
]

const DOCES = [
  { nome: 'Cupcake de Baunilha', descricao: 'Feito artesanalmente com recheio de creme e cobertura de buttercream.', preco: 'R$ 9,50' },
  { nome: 'Brownie de Chocolate', descricao: 'Denso, úmido e com gotas de chocolate meio amargo.', preco: 'R$ 8,00' },
  { nome: 'Cheesecake de Frutas', descricao: 'Base crocante, recheio cremoso e calda de frutas vermelhas.', preco: 'R$ 14,00' },
  { nome: 'Cookie de Aveia', descricao: 'Crocante por fora, macio por dentro com chips de chocolate.', preco: 'R$ 6,00' },
  { nome: 'Torta de Maçã', descricao: 'Massa folhada recheada com maçãs caramelizadas e canela.', preco: 'R$ 12,00' },
  { nome: 'Muffin de Blueberry', descricao: 'Fofinho e repleto de blueberries frescas importadas.', preco: 'R$ 8,50' },
]

const SALGADOS = [
  { nome: 'Croissant de Presunto e Queijo', descricao: 'Massa folhada crocante com presunto e queijo derretido.', preco: 'R$ 12,00' },
  { nome: 'Sanduíche de Atum', descricao: 'Pão integral com atum temperado, alface e tomate.', preco: 'R$ 15,00' },
  { nome: 'Quiche Lorraine', descricao: 'Torta salgada com bacon, queijo e creme de leite.', preco: 'R$ 13,00' },
  { nome: 'Wrap de Frango', descricao: 'Tortilha com frango grelhado, cream cheese e rúcula.', preco: 'R$ 16,00' },
  { nome: 'Coxinha Gourmet', descricao: 'Recheio de frango com catupiry e crosta crocante de panko.', preco: 'R$ 7,00' },
  { nome: 'Pão de Queijo', descricao: 'Receita mineira tradicional, quentinho e recheado.', preco: 'R$ 5,00' },
]

const PERGUNTAS_FREQUENTES = [
  {
    titulo: 'O The Brew House faz delivery?',
    conteudo: 'Sim! Fazemos delivery em um raio de 5 km de cada unidade. Você pode fazer seu pedido pelo nosso site, app ou por telefone. O prazo de entrega é de 30 a 50 minutos.',
  },
  {
    titulo: 'Vocês têm opções para intolerantes à lactose?',
    conteudo: 'Sim, temos leite de aveia, de amêndoas e de coco disponíveis como substituições sem custo adicional em qualquer bebida. Informe ao barista na hora do pedido.',
  },
  {
    titulo: 'É possível reservar mesa?',
    conteudo: 'Reservas estão disponíveis para grupos acima de 6 pessoas. Entre em contato pelo telefone da unidade desejada com pelo menos 24 horas de antecedência.',
  },
  {
    titulo: 'Como funciona o programa de fidelidade?',
    conteudo: 'A cada compra acima de R$ 10,00 você recebe um carimbo no seu cartão fidelidade. Com 10 carimbos, você ganha um café espresso grátis. O cartão é válido por 1 ano.',
  },
  {
    titulo: 'Vocês vendem grãos de café para levar?',
    conteudo: 'Sim! Vendemos nossos grãos especiais em embalagens de 250g e 500g. Trabalhamos com diferentes origens e torrejas. Pergunte ao barista sobre as opções do dia.',
  },
]

function ListaProdutos({ itens, aoAdicionarPedido }) {
  const [paginaAtual, setPaginaAtual] = useState(1)
  const totalPaginas = Math.ceil(itens.length / ITENS_POR_PAGINA)
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA
  const itensPagina = itens.slice(inicio, inicio + ITENS_POR_PAGINA)

  function mudarPagina(novaPagina) {
    setPaginaAtual(novaPagina)
  }

  return (
    <div className="lista-produtos">
      <ul className="produtos-lista" aria-label="Lista de produtos">
        {itensPagina.map((item, i) => (
          <li key={i} className="produto-item">
            <div className="produto-info">
              <h4 className="produto-nome">{item.nome}</h4>
              <p className="produto-descricao">{item.descricao}</p>
            </div>
            <div className="produto-acoes">
              <span className="produto-preco">{item.preco}</span>
              <button
                className="btn-adicionar"
                onClick={() => aoAdicionarPedido(item.nome)}
                aria-label={`Adicionar ${item.nome} ao pedido`}
              >
                + Adicionar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        totalPaginas={totalPaginas}
        paginaAtual={paginaAtual}
        aoMudarPagina={mudarPagina}
      />
    </div>
  )
}

const TOTAL_CAFES = 10

function Cardapio() {
  const [toasts, setToasts] = useState([])
  const [cafesAcumulados, setCafesAcumulados] = useState(4)

  const pontosFidelidade = (cafesAcumulados / TOTAL_CAFES) * 100

  const adicionarToast = useCallback((mensagem, tipo = 'sucesso') => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, mensagem, tipo, duracao: 3500 }])
  }, [])

  const removerToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  function aoAdicionarPedido(nomeProduto) {
    adicionarToast(`"${nomeProduto}" adicionado ao pedido!`, 'sucesso')
    setCafesAcumulados((prev) => {
      const proximo = prev + 1
      if (proximo >= TOTAL_CAFES) {
        setTimeout(() => {
          adicionarToast('Parabéns! Você ganhou um café grátis!', 'info')
        }, 400)
        return 0
      }
      return proximo
    })
  }

  const abasCardapio = [
    {
      titulo: 'Cafés',
      conteudo: (
        <ListaProdutos itens={CAFES} aoAdicionarPedido={aoAdicionarPedido} />
      ),
    },
    {
      titulo: 'Doces',
      conteudo: (
        <ListaProdutos itens={DOCES} aoAdicionarPedido={aoAdicionarPedido} />
      ),
    },
    {
      titulo: 'Salgados',
      conteudo: (
        <ListaProdutos itens={SALGADOS} aoAdicionarPedido={aoAdicionarPedido} />
      ),
    },
  ]

  return (
    <main className="cardapio">
      <ToastContainer toasts={toasts} aoRemover={removerToast} />

      <section className="cardapio-hero" aria-label="Cabeçalho do cardápio">
        <div className="container">
          <h1 className="secao-titulo">Nosso Cardápio</h1>
          <p className="secao-descricao">
            Escolha sua bebida, doce ou salgado favorito e faça seu pedido.
          </p>
        </div>
      </section>

      <section className="cardapio-pedido" aria-label="Tipo de pedido">
        <div className="container">
          <div className="pedido-grid">
            <div className="pedido-dropdown">
              <Dropdown
                rotulo="Como você vai consumir?"
                opcoes={['Consumir no local', 'Retirada no balcão', 'Delivery']}
              />
            </div>
            <div className="pedido-dica">
              <p>
                <strong>Dica:</strong> Selecione o tipo de pedido antes de adicionar itens ao carrinho.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cardapio-itens" aria-label="Itens do cardápio">
        <div className="container">
          <Tabs abas={abasCardapio} />
        </div>
      </section>

      <section className="cardapio-fidelidade" aria-label="Programa de fidelidade">
        <div className="container">
          <h2 className="secao-titulo">Seu Programa de Fidelidade</h2>
          <p className="secao-descricao">
            {cafesAcumulados === 0
              ? 'Continue pedindo para acumular pontos!'
              : `Você está a ${TOTAL_CAFES - cafesAcumulados} café(s) de ganhar um grátis!`}
          </p>
          <div className="fidelidade-card">
            <ProgressBar
              valor={pontosFidelidade}
              rotulo={`Progresso: ${cafesAcumulados} de ${TOTAL_CAFES} cafés`}
            />
            <p className="fidelidade-dica">
              A cada compra acima de R$ 10,00 você ganha um ponto. Junte 10 e ganhe um espresso grátis!
            </p>
          </div>
        </div>
      </section>

      <section className="cardapio-faq" aria-label="Perguntas frequentes">
        <div className="container">
          <h2 className="secao-titulo">Perguntas Frequentes</h2>
          <Accordion itens={PERGUNTAS_FREQUENTES} />
        </div>
      </section>
    </main>
  )
}

export default Cardapio
