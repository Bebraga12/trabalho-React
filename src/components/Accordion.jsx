import { useState } from 'react'

function AccordionItem({ titulo, conteudo, aberto, aoClicar }) {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-trigger ${aberto ? 'aberto' : ''}`}
        onClick={aoClicar}
        aria-expanded={aberto}
      >
        <span>{titulo}</span>
        <span className="accordion-icone" aria-hidden="true">
          {aberto ? '▲' : '▼'}
        </span>
      </button>
      {aberto && (
        <div className="accordion-conteudo" role="region">
          <p>{conteudo}</p>
        </div>
      )}
    </div>
  )
}

function Accordion({ itens }) {
  const [aberto, setAberto] = useState(null)

  function alternarItem(indice) {
    setAberto(indice === aberto ? null : indice)
  }

  return (
    <div className="accordion" role="list">
      {itens.map((item, indice) => (
        <div key={indice} role="listitem">
          <AccordionItem
            titulo={item.titulo}
            conteudo={item.conteudo}
            aberto={aberto === indice}
            aoClicar={() => alternarItem(indice)}
          />
        </div>
      ))}
    </div>
  )
}

export default Accordion
