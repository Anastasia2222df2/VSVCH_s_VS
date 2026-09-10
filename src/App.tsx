import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import type { CourseItem } from './types';

export function App() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  // Кастомная тема MUI
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#9c27b0' },
    },
  });

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: CourseItem[]) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header organizationName="НИУ МЭИ" darkMode={darkMode} setDarkMode={setDarkMode} />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursesPage courses={courses} setCourses={setCourses} />} />
            </Routes>
          </Box>
          <Footer version="1.0.0" />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;