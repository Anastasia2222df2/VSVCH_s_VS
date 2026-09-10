import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import type { CourseItem } from './types';
import './App.css';

export function App() {
  const [courses, setCourses] = useState<CourseItem[]>([]);

  // Загрузка исходных данных из json-файла
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: CourseItem[]) => setCourses(data))
      .catch((err) => console.error('Ошибка подгрузки JSON:', err));
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header organizationName="НИУ МЭИ" />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage courses={courses} setCourses={setCourses} />} />
          </Routes>
        </main>
        <Footer version="2.0.0" />
      </div>
    </BrowserRouter>
  );
}

export default App;