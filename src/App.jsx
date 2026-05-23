import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Sobre from './pages/Sobre'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-conteudo">
        <NavLink to="/" className="navbar-logo" aria-label="Ir para página inicial do Café Aroma">
          Café Aroma
        </NavLink>
        <nav className="navbar-nav" aria-label="Navegação principal">
          <ul role="list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cardapio"
                className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}
              >
                Cardápio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                className={({ isActive }) => isActive ? 'nav-link ativo' : 'nav-link'}
              >
                Sobre
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <div className="footer-marca">
          <p className="footer-logo">Café Aroma</p>
          <p>O sabor que aquece a alma.</p>
        </div>
        <div className="footer-links">
          <h4>Páginas</h4>
          <ul role="list">
            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
            <li><NavLink to="/cardapio" className="footer-link">Cardápio</NavLink></li>
            <li><NavLink to="/sobre" className="footer-link">Sobre</NavLink></li>
          </ul>
        </div>
        <div className="footer-contato">
          <h4>Contato</h4>
          <address>
            <p>Rua das Flores, 142 — Centro</p>
            <p>(11) 3344-5566</p>
            <p>contato@cafearoma.com.br</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Café Aroma. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
