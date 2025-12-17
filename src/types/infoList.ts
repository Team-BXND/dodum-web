export interface InfoListProps {
  id?: number;
  title?: string;
  content?: string;
  author?: string;
  category?: string;
  createdAt?: string;
  likes?: number;
  comments?: number;
  commented?: Comment[];
  views?: number;
  imageUrls: string;
  isApproved?: boolean;
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
