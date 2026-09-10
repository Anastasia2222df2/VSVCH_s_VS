interface FooterProps {
  version: string;
}

export const Footer = ({ version }: FooterProps) => {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#f1f1f1', marginTop: '2rem' }}>
      <p>© 2026 Все права защищены | Версия: {version}</p>
    </footer>
  );
};