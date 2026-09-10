export interface CourseItem {
  id: number;
  title: string;
  description: string;
  category: string;
}

export interface AppProps {
  organizationName: string;
  mainTitle: string;
  items: CourseItem[];
}