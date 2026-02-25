export interface Project {
  id: number;
  title: string;
  architect: string;
  location: string;
  category: string;
  area: string;
  description: string;
  image: string;
  createdAt: string;
}

export type Category = 
  | "Residential Buildings"
  | "Commercial Buildings"
  | "Interior Designs"
  | "Landscape Designs"
  | "Traditional Architecture"
  | "Modern Architecture";

export const CATEGORIES: Category[] = [
  "Residential Buildings",
  "Commercial Buildings",
  "Interior Designs",
  "Landscape Designs",
  "Traditional Architecture",
  "Modern Architecture"
];
