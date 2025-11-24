import * as S from './PostList.styled';
import InfoList from '@/components/InfoList/InfoList';

interface IInfoProps {
  title: string,
  listRef: React.RefObject<HTMLDivElement>
}

const Info = (data: IInfoProps) => {
  return (
    <>
      <S.Title>
        <S.Titletext>{data.title}</S.Titletext>
      </S.Title>
      <S.SearchBox placeholder="검색어를 입력해주세요"></S.SearchBox>
      <S.Search />
      <S.Container>
        <S.List ref={data.listRef}>
          {displayItems.map(
            ({
              id,
              title,
              content,
              author,
              category,
              createdAt,
              like,
              comment,
              view,
              img,
            }) => (
              <InfoList
                key={id}
                id={id}
                title={title}
                content={content}
                author={author}
                category={category}
                createdAt={createdAt}
                like={like}
                comment={comment}
                view={view}
                img={img}
              />
            )
          )}
        </S.List>
      </S.Container>
      <S.AddButtonWrapper>
        <S.AddButton />
      </S.AddButtonWrapper>
    </>
  );
};

export default Info;
