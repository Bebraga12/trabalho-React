import { useState } from 'react'

function Tabs({ abas }) {
  const [abaAtiva, setAbaAtiva] = useState(0)

  return (
    <div className="tabs">
      <div className="tabs-lista" role="tablist" aria-label="Categorias do cardápio">
        {abas.map((aba, indice) => (
          <button
            key={indice}
            role="tab"
            className={`tabs-botao ${abaAtiva === indice ? 'ativa' : ''}`}
            onClick={() => setAbaAtiva(indice)}
            aria-selected={abaAtiva === indice}
            aria-controls={`painel-${indice}`}
            id={`aba-${indice}`}
          >
            {aba.titulo}
          </button>
        ))}
      </div>

      <div
        className="tabs-painel"
        role="tabpanel"
        id={`painel-${abaAtiva}`}
        aria-labelledby={`aba-${abaAtiva}`}
      >
        {abas[abaAtiva].conteudo}
      </div>
    </div>
  )
}

export default Tabs
