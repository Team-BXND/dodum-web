import { useLocation } from 'react-router-dom';
import * as S from './Category.style';

interface ICategoryProps {
  id: number;
  text: string,
  to: string,
}

const Category = ({ categories }:{ categories:ICategoryProps[] }) => {
  const location = useLocation();
  return (
    <S.Container>
      {categories.map((item) => <S.Tab key={item.to} to={item.to} $active={location.pathname.endsWith(item.to)}>{item.text}</S.Tab>)}
    </S.Container>
  )
}

export default Category