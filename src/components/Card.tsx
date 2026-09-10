import type { CourseItem } from '../types';

interface CardProps {
  item: CourseItem;
}

export const Card = ({ item }: CardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>{item.title}</h3>
      <p>Категория: {item.category}</p>
      <p>{item.description}</p>
    </div>
  );
};