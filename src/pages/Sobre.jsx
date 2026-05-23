import ProgressBar from '../components/ProgressBar'

function Sobre() {
  return (
    <main className="sobre">
      <section className="sobre-hero" aria-label="Sobre o Café Aroma">
        <div className="container">
          <h1 className="secao-titulo">Nossa História</h1>
          <p className="sobre-intro">
            O Café Aroma nasceu de um sonho simples: criar um lugar onde as pessoas
            pudessem pausar o dia e saborear um café de verdade.
          </p>
        </div>
      </section>

      <section className="sobre-historia" aria-label="História da cafeteria">
        <div className="container sobre-grid">
          <div className="sobre-texto">
            <h2>Como tudo começou</h2>
            <p>
              Em 2012, Ana e Carlos Ferreira abriram as portas do Café Aroma em um
              pequeno espaço no centro da cidade. O casal, apaixonado por café desde
              que se conheceu numa viagem à Colômbia, queria trazer para o Brasil a
              cultura do café especial de uma forma acessível e aconchegante.
            </p>
            <p>
              O nome "Aroma" surgiu de um momento simples: na manhã da inauguração,
              vizinhos foram atraídos pelo cheiro do café sendo torrado. "Se o
              aroma já te conquista antes de entrar, imagina o sabor", disse Ana.
            </p>
            <p>
              Hoje, mais de uma década depois, o Café Aroma tem três unidades, uma
              equipe de 25 baristas e é reconhecido como um dos melhores cafés
              especiais da cidade.
            </p>
          </div>
          <aside className="sobre-numeros" aria-label="Números do Café Aroma">
            <h3>Café Aroma em números</h3>
            <ul className="numeros-lista">
              <li>
                <strong>+10 anos</strong>
                <span>de história</span>
              </li>
              <li>
                <strong>3 unidades</strong>
                <span>na cidade</span>
              </li>
              <li>
                <strong>25 baristas</strong>
                <span>especializados</span>
              </li>
              <li>
                <strong>+50 mil</strong>
                <span>xícaras servidas por mês</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="sobre-valores" aria-label="Nossos valores">
        <div className="container">
          <h2 className="secao-titulo">Nossos Valores</h2>
          <div className="valores-grid">
            <article className="valor-card">
              <h3>Sustentabilidade</h3>
              <p>Trabalhamos com produtores que praticam agricultura responsável e pagamos preço justo.</p>
            </article>
            <article className="valor-card">
              <h3>Comunidade</h3>
              <p>Apoiamos produtores locais e promovemos eventos culturais no espaço da cafeteria.</p>
            </article>
            <article className="valor-card">
              <h3>Qualidade</h3>
              <p>Cada produto é selecionado e testado antes de chegar à sua xícara.</p>
            </article>
            <article className="valor-card">
              <h3>Acolhimento</h3>
              <p>Nosso espaço é para todos. Aqui todo mundo se sente em casa.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sobre-satisfacao" aria-label="Índices de satisfação">
        <div className="container">
          <h2 className="secao-titulo">Nossa Satisfação</h2>
          <p className="secao-descricao">
            Monitoramos constantemente a qualidade dos nossos produtos e serviços.
          </p>
          <div className="satisfacao-itens">
            <div className="satisfacao-item">
              <ProgressBar valor={95} rotulo="Satisfação geral dos clientes" />
            </div>
            <div className="satisfacao-item">
              <ProgressBar valor={88} rotulo="Qualidade do café" />
            </div>
            <div className="satisfacao-item">
              <ProgressBar valor={92} rotulo="Atendimento" />
            </div>
            <div className="satisfacao-item">
              <ProgressBar valor={85} rotulo="Ambiente e conforto" />
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-equipe" aria-label="Nossa equipe">
        <div className="container">
          <h2 className="secao-titulo">Quem faz o Café Aroma</h2>
          <div className="cards-grid">
            <article className="card-membro">
              <div className="membro-avatar" aria-hidden="true">AF</div>
              <h3>Ana Ferreira</h3>
              <p className="membro-cargo">Fundadora &amp; Head de Qualidade</p>
              <p>Apaixonada por café desde os 15 anos, Ana cuida pessoalmente da seleção de cada grão.</p>
            </article>
            <article className="card-membro">
              <div className="membro-avatar" aria-hidden="true">CF</div>
              <h3>Carlos Ferreira</h3>
              <p className="membro-cargo">Fundador &amp; Gestor de Operações</p>
              <p>Responsável por garantir que cada unidade entregue a mesma experiência única.</p>
            </article>
            <article className="card-membro">
              <div className="membro-avatar" aria-hidden="true">BS</div>
              <h3>Beatriz Santos</h3>
              <p className="membro-cargo">Head Barista</p>
              <p>Campeã regional de barismo em 2021, Beatriz treina e lidera nossa equipe de baristas.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sobre-contato" aria-label="Informações de contato">
        <div className="container">
          <h2 className="secao-titulo">Venha nos visitar</h2>
          <div className="contato-grid">
            <address className="contato-info">
              <h3>Unidade Centro</h3>
              <p>Rua das Flores, 142 — Centro</p>
              <p>(11) 3344-5566</p>
              <p>Seg–Sex: 7h–20h | Sáb–Dom: 8h–18h</p>
            </address>
            <address className="contato-info">
              <h3>Unidade Jardins</h3>
              <p>Av. das Acácias, 890 — Jardins</p>
              <p>(11) 3344-7788</p>
              <p>Seg–Sex: 7h–20h | Sáb–Dom: 8h–18h</p>
            </address>
            <address className="contato-info">
              <h3>Unidade Vila Nova</h3>
              <p>Rua Café com Leite, 33 — Vila Nova</p>
              <p>(11) 3344-9900</p>
              <p>Seg–Sex: 8h–19h | Sáb: 9h–17h</p>
            </address>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Sobre
