import * as S from './Major.style';
import MajorQuestion from '@/components/MajorQuestion/MajorQuestion';

function Major() {
  return (
    <S.Container>
      {Array.from({ length: 20 }).map((_, index) => (
        <MajorQuestion key={index} />
      ))}
    </S.Container>
  );
}

export default Major;
