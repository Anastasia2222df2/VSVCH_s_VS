import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CardList } from './components/CardList';
import { Footer } from './components/Footer';
import type { CourseItem } from './types';

export function App() {
  const organizationName = "НИУ МЭИ";
  const mainTitle = "Курсы по веб-разработке";
  
  const courses: CourseItem[] = [
    { id: 1, title: "React & TypeScript", category: "Frontend", description: "Основы современной фронтенд-разработки." },
    { id: 2, title: "Node.js Basics", category: "Backend", description: "Создание серверных приложений на JS." },
    { id: 3, title: "UI/UX Design", category: "Design", description: "Проектирование пользовательских интерфейсов." }
  ];

  return (
    <div className="app-container">
      <Header organizationName={organizationName} />
      <Navbar />
      <main>
        <Hero title={mainTitle} />
        <CardList items={courses} />
      </main>
      <Footer version="1.0.0" />
    </div>
  );
}

export default App;