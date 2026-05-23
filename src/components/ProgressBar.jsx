function ProgressBar({ valor, rotulo }) {
  const porcentagem = Math.min(100, Math.max(0, valor))

  return (
    <div className="progress-bar-wrapper">
      {rotulo && <p className="progress-bar-rotulo">{rotulo}</p>}
      <div
        className="progress-bar-trilha"
        role="progressbar"
        aria-valuenow={porcentagem}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={rotulo || `Progresso: ${porcentagem}%`}
      >
        <div
          className="progress-bar-preenchimento"
          style={{ width: `${porcentagem}%` }}
        />
      </div>
      <span className="progress-bar-percentual">{porcentagem}%</span>
    </div>
  )
}

export default ProgressBar
