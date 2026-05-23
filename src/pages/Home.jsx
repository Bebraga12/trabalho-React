import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <section className="hero" aria-label="Boas-vindas à Café Aroma">
        <div className="hero-conteudo">
          <p className="hero-tag">Bem-vindo ao</p>
          <h1 className="hero-titulo">Café Aroma</h1>
          <p className="hero-subtitulo">
            O lugar onde cada xícara conta uma história. Grãos selecionados,
            sabor inconfundível e um aconchego que você só encontra aqui.
          </p>
          <div className="hero-acoes">
            <Link to="/cardapio" className="btn-primario">
              Ver Cardápio
            </Link>
            <Link to="/sobre" className="btn-secundario">
              Sobre nós
            </Link>
          </div>
        </div>
        <div className="hero-imagem" aria-hidden="true">
          <div className="xicara-ilustracao">
            <div className="xicara-vapor">
              <span></span><span></span><span></span>
            </div>
            <div className="xicara-corpo"></div>
          </div>
        </div>
      </section>

      <section className="diferenciais" aria-label="Nossos diferenciais">
        <div className="container">
          <h2 className="secao-titulo">Por que escolher o Café Aroma?</h2>
          <div className="cards-grid">
            <article className="card-diferencial">
              <h3>Grãos Especiais</h3>
              <p>Trabalhamos com grãos de origem única, selecionados diretamente de produtores parceiros.</p>
            </article>
            <article className="card-diferencial">
              <h3>Baristas Especializados</h3>
              <p>Nossa equipe é treinada para extrair o melhor sabor de cada grão com técnica e paixão.</p>
            </article>
            <article className="card-diferencial">
              <h3>Ambiente Acolhedor</h3>
              <p>Um espaço pensado para você relaxar, trabalhar ou simplesmente curtir um bom café.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="fidelidade" aria-label="Programa de fidelidade">
        <div className="container">
          <h2 className="secao-titulo">Programa de Fidelidade</h2>
          <p className="secao-descricao">
            A cada visita você acumula pontos. Complete 10 cafés e ganhe um grátis!
          </p>
          <div className="fidelidade-card">
            <p className="fidelidade-texto">
              Faça seus pedidos pelo cardápio e acompanhe seu progresso em tempo real.
            </p>
            <p className="fidelidade-dica">
              A cada compra acima de R$ 10,00 você ganha um ponto. Junte 10 e ganhe um espresso grátis!
            </p>
            <div className="secao-cta">
              <Link to="/cardapio" className="btn-primario">
                Ver meu progresso
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="destaques" aria-label="Destaques do cardápio">
        <div className="container">
          <h2 className="secao-titulo">Destaques da Semana</h2>
          <div className="cards-grid">
            <article className="card-produto">
              <h3>Espresso Clássico</h3>
              <p>Intenso, encorpado e com crema perfeita. O café que não decepciona.</p>
              <span className="produto-preco">R$ 6,00</span>
            </article>
            <article className="card-produto">
              <h3>Cupcake de Baunilha</h3>
              <p>Feito artesanalmente todos os dias. Combina perfeitamente com qualquer café.</p>
              <span className="produto-preco">R$ 9,50</span>
            </article>
            <article className="card-produto">
              <h3>Croissant de Presunto</h3>
              <p>Crocante por fora, macio por dentro. O lanche perfeito para qualquer hora.</p>
              <span className="produto-preco">R$ 12,00</span>
            </article>
          </div>
          <div className="secao-cta">
            <Link to="/cardapio" className="btn-primario">
              Ver cardápio completo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
