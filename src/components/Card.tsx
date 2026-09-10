import { Card as MuiCard, CardContent, CardActions, Typography, Button, Chip, Rating, Box } from '@mui/material';
import type { CourseItem } from '../types';

interface CardProps {
  item: CourseItem;
  onSelect: (item: CourseItem) => void;
  onDelete: (id: number) => void;
}

export const Card = ({ item, onSelect, onDelete }: CardProps) => {
  return (
    <MuiCard sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="div">
            {item.title}
          </Typography>
          <Chip label={item.category} color="secondary" size="small" />
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {item.description}
        </Typography>
        <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold' }}>
          {item.price ?? 0} ₽
        </Typography>
        <Rating value={item.rating ?? 5} readOnly size="small" sx={{ mt: 1 }} />
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={() => onSelect(item)}>
          Подробнее
        </Button>
        <Button size="small" variant="contained" color="error" onClick={() => onDelete(item.id)}>
          Удалить
        </Button>
      </CardActions>
    </MuiCard>
  );
};