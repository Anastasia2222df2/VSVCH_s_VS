import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography, 
  Rating, 
  Chip, 
  Box 
} from '@mui/material';
import type { CourseItem } from '../types';

interface ModalProps {
  item: CourseItem | null;
  onClose: () => void;
}

export const Modal = ({ item, onClose }: ModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={Boolean(item)} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{item.title}</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <Chip label={item.category} color="primary" size="small" />
        </Box>
        <Typography variant="body1" gutterBottom>
          {item.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Цена: {item.price ?? 0} ₽
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography component="legend" sx={{ mr: 1 }}>Рейтинг:</Typography>
          <Rating value={item.rating ?? 5} readOnly />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};