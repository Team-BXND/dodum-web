import type { InfoListProps } from '@/types/infoList';
import InfoList from '@/components/InfoList/InfoList';
import * as S from './InfoPost.style';
import InfoSkeleton from './InfoSkeleton';

interface InfoPostProps {
  posts: InfoListProps[];
  loading?: boolean;
}

const InfoPost = ({ posts = [], loading }: InfoPostProps) => {
  if (loading && posts.length === 0) {
    const skeletonData = Array.from({ length: 10 }).map((_, i) => i);

    return (
      <S.Wrapper>
        {skeletonData.map((item, index) => (
          <InfoSkeleton key={index} isLoading={loading} item={item} />
        ))}
      </S.Wrapper>
    );
  }
  if (!loading && posts.length === 0) {
    return (
      <S.EmptyWrapper>
        <S.EmptyBox description="아직 공유된 정보가 없습니다"></S.EmptyBox>
      </S.EmptyWrapper>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <InfoList key={post.id} {...post} />
      ))}
    </>
  );
};

export default InfoPost;
