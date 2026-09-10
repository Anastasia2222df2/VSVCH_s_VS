import type { CourseItem } from '../types';

interface ModalProps {
  item: CourseItem | null;
  onClose: () => void;
}

export const Modal = ({ item, onClose }: ModalProps) => {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{item.title}</h2>
        <p className="modal-category"><strong>Категория:</strong> {item.category}</p>
        <p className="modal-description">{item.description}</p>
        <button className="btn-close" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};