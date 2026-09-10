import { useState, type ChangeEvent, type FormEvent } from 'react';
import { 
  Container, 
  Grid, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Paper, 
  Snackbar, 
  Alert, 
  Rating 
} from '@mui/material';
import type { CourseItem } from '../types';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';

interface CoursesPageProps {
  courses: CourseItem[];
  setCourses: React.Dispatch<React.SetStateAction<CourseItem[]>>;
}

export const CoursesPage = ({ courses, setCourses }: CoursesPageProps) => {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [notification, setNotification] = useState<string | null>(null);

  // Поля формы
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(5);

  const handleAddCourse = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !category) return;

    const newCourse: CourseItem = {
      id: Date.now(),
      title,
      category,
      description,
      price: Number(price),
      rating
    };

    setCourses([...courses, newCourse]);
    setTitle('');
    setCategory('');
    setDescription('');
    setPrice(0);
    setRating(5);
    setNotification('Курс успешно добавлен!');
  };

  const handleDelete = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id));
    setNotification('Курс удален!');
  };

  // Поиск и Фильтрация
  const filteredCourses = courses.filter((c) => {
    const matchesCategory = filter === 'All' || c.category === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Каталог курсов
      </Typography>

      {/* Поиск и фильтрация */}
<Paper sx={{ p: 2, mb: 4 }}>
  <Grid container spacing={2} sx={{ alignItems: 'center' }}>
    <Grid size={{ xs: 12, sm: 6 }}>
      <TextField 
        fullWidth 
        label="Поиск по названию..." 
        value={searchQuery} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} 
      />
    </Grid>
    <Grid size={{ xs: 12, sm: 6 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {['All', 'Frontend', 'Backend', 'Design'].map((cat) => (
          <Button 
            key={cat} 
            variant={filter === cat ? 'contained' : 'outlined'} 
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </Box>
    </Grid>
  </Grid>
</Paper>

      {/* Форма добавления */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Добавить новый курс
        </Typography>
        <Box component="form" onSubmit={handleAddCourse} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Название" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <TextField label="Категория" value={category} onChange={(e) => setCategory(e.target.value)} required />
          <TextField label="Цена (₽)" type="number" value={price || ''} onChange={(e) => setPrice(Number(e.target.value))} />
          <TextField label="Описание" multiline rows={2} value={description} onChange={(e) => setDescription(e.target.value)} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>Рейтинг:</Typography>
            <Rating value={rating} onChange={(_, newValue) => setRating(newValue || 5)} />
          </Box>
          <Button type="submit" variant="contained" color="success">
            Добавить
          </Button>
        </Box>
      </Paper>

      {/* Сетка карт */}
      <Grid container spacing={3}>
        {filteredCourses.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card item={item} onSelect={setSelectedCourse} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>

      {/* Модальное окно */}
      <Modal item={selectedCourse} onClose={() => setSelectedCourse(null)} />

      {/* Всплывающее уведомление (Snackbar) */}
      <Snackbar open={Boolean(notification)} autoHideDuration={3000} onClose={() => setNotification(null)}>
        <Alert severity="success" onClose={() => setNotification(null)}>
          {notification}
        </Alert>
      </Snackbar>
    </Container>
  );
};