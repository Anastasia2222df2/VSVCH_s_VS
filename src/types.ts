export interface CourseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
}

export interface AppProps {
  organizationName: string;
  mainTitle: string;
  items: CourseItem[];
}