import { useState, useEffect } from 'react'

function Toast({ mensagem, duracao = 3000, tipo = 'sucesso', aoFechar }) {
  const [visivel, setVisivel] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false)
      if (aoFechar) aoFechar()
    }, duracao)
    return () => clearTimeout(timer)
  }, [duracao, aoFechar])

  if (!visivel) return null

  return (
    <div
      className={`toast toast-${tipo}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="toast-mensagem">{mensagem}</span>
      <button
        className="toast-fechar"
        onClick={() => {
          setVisivel(false)
          if (aoFechar) aoFechar()
        }}
        aria-label="Fechar notificação"
      >
        ✕
      </button>
    </div>
  )
}

function ToastContainer({ toasts, aoRemover }) {
  return (
    <div className="toast-container" aria-label="Notificações">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          mensagem={toast.mensagem}
          tipo={toast.tipo}
          duracao={toast.duracao}
          aoFechar={() => aoRemover(toast.id)}
        />
      ))}
    </div>
  )
}

export { ToastContainer }
export default Toast
