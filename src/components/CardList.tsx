import type { CourseItem } from '../types';
import { Card } from './Card';

interface CardListProps {
  items: CourseItem[];
}

export const CardList = ({ items }: CardListProps) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};