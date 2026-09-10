import type { CourseItem } from '../types';

interface CardProps {
  item: CourseItem;
}

export const Card = ({ item }: CardProps) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p style={{ color: '#007bff', fontWeight: 'bold' }}>{item.category}</p>
      <p>{item.description}</p>
    </div>
  );
};