export interface InfoListProps {
  id: number;
  title: string;
  name: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
  likes: number;
  comment: number;
  comments?: Comment[];
  view: number;
  Image: string;
}

export interface InfoCommentProps {
  id: number;
  author: string;
  text: string;
  createdAt: string;
}
export interface IconProps {
  svgUrl: string;
}
