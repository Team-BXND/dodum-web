import { Navigate, useParams } from 'react-router-dom';
import Posts from './pages/Posts';

const ALLOWED_CATEGORIES = ['club', 'narsha', 'awards', 'mini-project'] as const;
type Category = 'club' | 'narsha' | 'awards' | 'mini-project';

export default function CategoryRoute() {
  const { category = '' } = useParams();
  if (!ALLOWED_CATEGORIES.includes(category as Category)) {
    return <Navigate to="/404" replace />;
  }
  return <Posts category={category as typeof ALLOWED_CATEGORIES[number]} />;
}