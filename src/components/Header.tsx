import { Link } from 'react-router-dom';

interface HeaderProps {
  organizationName: string;
}

export const Header = ({ organizationName }: HeaderProps) => {
  return (
    <header className="header">
      <h2>{organizationName}</h2>
      <nav className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/courses">Курсы</Link>
        <Link to="/about">О нас</Link>
      </nav>
    </header>
  );
};