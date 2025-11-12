import * as S from './infoView.style';
import InfoList from '@/components/InfoList/InfoList';
import { infoItems } from '@/constants/info.constants';
import { useState } from 'react';

const Info = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  const startIndex = (currentPage - 1) * pageSize;
  const currentPages = infoItems[0].posts.slice(
    startIndex,
    startIndex + pageSize
  );
  const totalPages = Math.ceil(infoItems[0].posts.length / pageSize);

  return (
    <>
      <S.Title>
        <S.Titletext>정보공유</S.Titletext>
      </S.Title>
      <S.SearchBox placeholder="검색어를 입력해주세요"></S.SearchBox>
      <S.Search />
      <S.Container>

        <S.List>
          {currentPages.map(
            ({
              id,
              title,
              name,
              content,
              author,
              category,
              createdAt,
              likes,
              comment,
              view,
              Image,
            }) => (
              <InfoList
                key={id}
                id={id}
                title={title}
                name={name}
                content={content}
                author={author}
                category={category}
                createdAt={createdAt}
                likes={likes}
                comment={comment}
                view={view}
                Image={Image}
              />
            )
          )}
        </S.List>
        <S.Pagination>
          {[...Array(totalPages)].map((_, i) => (
            <S.PageBtn
              key={i}
              $active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </S.PageBtn>
          ))}
        </S.Pagination>
      </S.Container>
      <S.AddButtonWrapper>
        <S.AddButton />
      </S.AddButtonWrapper>
    </>
  );
};

export default Info;
