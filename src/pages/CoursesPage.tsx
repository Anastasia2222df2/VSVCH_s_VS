import { useState, type ChangeEvent, type FormEvent } from 'react';
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

  // Поля формы для добавления
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  // Добавление элемента (State)
  const handleAddCourse = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !category) return;

    const newCourse: CourseItem = {
      id: Date.now(),
      title,
      category,
      description
    };

    setCourses([...courses, newCourse]);
    setTitle('');
    setCategory('');
    setDescription('');
  };

  // Удаление элемента (State)
  const handleDelete = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id));
  };
  

  // Фильтрация элементов
  const filteredCourses = filter === 'All'
    ? courses
    : courses.filter((c) => c.category === filter);

  return (
    <div className="page-content">
      <h1>Каталог курсов</h1>

      {/* Форма добавления (CRUD) */}
      <form className="add-form" onSubmit={handleAddCourse}>
        <h3>Добавить новый курс</h3>
        <input
          placeholder="Название курса"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
        <input
          placeholder="Категория (Frontend, Backend, etc.)"
          value={category}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
        />
        <textarea
          placeholder="Описание курса"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn-add">Добавить курс</button>
      </form>

      {/* Фильтрация */}
      <div className="filter-block">
        <button onClick={() => setFilter('All')}>Все</button>
        <button onClick={() => setFilter('Frontend')}>Frontend</button>
        <button onClick={() => setFilter('Backend')}>Backend</button>
        <button onClick={() => setFilter('Design')}>Design</button>
      </div>
      {/* Добавляем информационную плашку */}
<p style={{ margin: '1rem 0', fontWeight: 'bold' }}>
  Всего курсов в категории: {filteredCourses.length}
</p>

<div className="filter-block">
  <button onClick={() => setFilter('All')}>Все</button>
  <button onClick={() => setFilter('Frontend')}>Frontend</button>
  <button onClick={() => setFilter('Backend')}>Backend</button>
  <button onClick={() => setFilter('Design')}>Design</button>
  <button onClick={() => setCourses([])} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>Очистить все</button>
</div>

      {/* Список карт */}
      <div className="card-grid">
        {filteredCourses.map((item) => (
          <div key={item.id} className="card-wrapper">
            <Card item={item} />
            <div className="card-actions">
              <button className="btn-details" onClick={() => setSelectedCourse(item)}>Подробнее</button>
              <button className="btn-delete" onClick={() => handleDelete(item.id)}>Удалить</button>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно (Popup) */}
      <Modal item={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
};