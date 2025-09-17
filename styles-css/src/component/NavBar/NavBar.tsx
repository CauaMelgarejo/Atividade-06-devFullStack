import { useTheme } from '../../hooks/useTheme'; // 1. Importamos nosso hook!

function Navbar() {
  // 2. Usamos o hook para pegar o tema atual e a função de troca
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Minha Loja</h2>
      </div>

      <div className="navbar-actions">
        {/* 3. O botão agora simplesmente chama a função toggleTheme */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {/* Bônus: O ícone agora muda de acordo com o tema! */}
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <button className="cart-btn">
          🛒
          <span className="cart-badge">3</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;