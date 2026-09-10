interface HeaderProps {
  organizationName: string;
}

export const Header = ({ organizationName }: HeaderProps) => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
      <h2>{organizationName}</h2>
    </header>
  );
};