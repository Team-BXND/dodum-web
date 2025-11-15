import { useEffect, useState } from 'react';
import * as S from './ProgressCircle.style';

const ProgressCircle = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (!isSubmitting) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 300);

    // 언마운트 시 Interval 정리
    return () => clearInterval(interval);
  }, [isSubmitting]);

  return (
    <S.LoadingContainer>
      <S.ProgressCircle />
      <S.LoadingText>분석 결과를 기다리는 중이에요{dots}</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default ProgressCircle;
