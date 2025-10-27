import * as S from './infoView.style';
import InfoList from '@/components/InfoList/InfoList';
import { infoItems } from '@/components/InfoList/InfoList';
import { useState, useEffect, useRef } from 'react';

const Info = () => {
  const [displayItems, setDisplayItems] = useState(
    infoItems[0].posts.slice(0, 7)
  );
  const listRef = useRef<HTMLDivElement>(null);
  const itemsPerLoad = 7;
  const loadMore = () => {
    setDisplayItems((prev) => {
      if (prev.length >= infoItems[0].posts.length) return prev;
      const nextItems = infoItems[0].posts.slice(
        prev.length,
        prev.length + itemsPerLoad
      );
      return [...prev, ...nextItems];
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const list = listRef.current;
      if (!list) return;

      // 리스트가 스크롤 끝에 도달하면 loadMore
      if (list.scrollTop + list.clientHeight >= list.scrollHeight - 50) {
        loadMore();
      }
    };

    const list = listRef.current;
    list?.addEventListener('scroll', handleScroll);

    return () => list?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <S.Title>
        <S.Titletext>정보공유</S.Titletext>
      </S.Title>
      <S.SearchBox placeholder="검색어를 입력해주세요"></S.SearchBox>
      <S.Search />
      <S.Container>
        <S.List ref={listRef}>
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
