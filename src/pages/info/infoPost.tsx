import type { InfoListProps } from '@/types/infoList';
import InfoList from '@/components/InfoList/InfoList';

interface InfoPostProps {
  posts: InfoListProps[];
}

const InfoPost = ({ posts = [] }: InfoPostProps) => {
  if (posts.length === 0) {
    return <p>게시물이 없습니다.</p>;
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
