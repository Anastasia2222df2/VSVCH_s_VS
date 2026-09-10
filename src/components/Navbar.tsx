export const Navbar = () => {
  return (
    <nav style={{ padding: '0.5rem 1rem', backgroundColor: '#e0e0e0' }}>
      <ul className="nav-list">
        <li><a href="#main">Главная</a></li>
        <li><a href="#courses">Курсы</a></li>
        <li><a href="#about">О нас</a></li>
      </ul>
    </nav>
  );
};