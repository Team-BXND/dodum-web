export interface InfoListProps {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
  like: number;
  comment: number;
  view: number;
  img: string;
}

export interface IconProps {
  svgUrl: string;
}
