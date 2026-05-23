function Pagination({ totalPaginas, paginaAtual, aoMudarPagina }) {
  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1)

  return (
    <nav className="pagination" aria-label="Navegação de páginas">
      <button
        className="pagination-btn"
        onClick={() => aoMudarPagina(paginaAtual - 1)}
        disabled={paginaAtual === 1}
        aria-label="Página anterior"
      >
        ← Anterior
      </button>

      <ul className="pagination-numeros" role="list">
        {paginas.map((pagina) => (
          <li key={pagina}>
            <button
              className={`pagination-numero ${pagina === paginaAtual ? 'ativa' : ''}`}
              onClick={() => aoMudarPagina(pagina)}
              aria-label={`Ir para página ${pagina}`}
              aria-current={pagina === paginaAtual ? 'page' : undefined}
            >
              {pagina}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="pagination-btn"
        onClick={() => aoMudarPagina(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
        aria-label="Próxima página"
      >
        Próxima →
      </button>
    </nav>
  )
}

export default Pagination
