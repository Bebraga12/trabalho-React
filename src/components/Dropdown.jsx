import { useState, useEffect, useRef } from 'react'

function Dropdown({ opcoes, rotulo }) {
  const [aberto, setAberto] = useState(false)
  const [selecionado, setSelecionado] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    function fecharAoClicarFora(evento) {
      if (ref.current && !ref.current.contains(evento.target)) {
        setAberto(false)
      }
    }
    document.addEventListener('mousedown', fecharAoClicarFora)
    return () => document.removeEventListener('mousedown', fecharAoClicarFora)
  }, [])

  function selecionar(opcao) {
    setSelecionado(opcao)
    setAberto(false)
  }

  return (
    <div className="dropdown" ref={ref}>
      {rotulo && <label className="dropdown-rotulo">{rotulo}</label>}
      <button
        className={`dropdown-gatilho ${aberto ? 'aberto' : ''}`}
        onClick={() => setAberto(!aberto)}
        aria-haspopup="listbox"
        aria-expanded={aberto}
        aria-label={rotulo || 'Selecionar opção'}
      >
        <span>{selecionado || 'Selecione uma opção'}</span>
        <span className="dropdown-icone" aria-hidden="true">
          {aberto ? '▲' : '▼'}
        </span>
      </button>

      {aberto && (
        <ul className="dropdown-lista" role="listbox" aria-label={rotulo}>
          {opcoes.map((opcao, indice) => (
            <li
              key={indice}
              role="option"
              aria-selected={selecionado === opcao}
              className={`dropdown-item ${selecionado === opcao ? 'selecionado' : ''}`}
              onClick={() => selecionar(opcao)}
            >
              {opcao}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
