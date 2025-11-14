import * as S from './infoView.style';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from './Context/InfoPageContext';
import InfoPost from './infoPost';
import type { InfoListProps } from '@/types/infoList';
import axios from 'axios';
import { AddButton } from '../Archive/Archive.style';
import { infoItems } from '@/constants/info.constants';

const Info = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const [posts, setPosts] = useState<InfoListProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const POSTS_PER_PAGE = 10;
  const [grade, setGrade] = useState(2);

  useEffect(() => {
    axios
      .get('/info-api/info', {
        params: { page: currentPage - 1 },
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((res) => {
        const fetchedPosts = res.data.data;
        if (currentPage === 1 && totalPages === 0 && fetchedPosts.length > 0) {
          const totalElements = fetchedPosts[0].id;
          setTotalPages(Math.ceil(totalElements / POSTS_PER_PAGE));
        }
        setPosts(fetchedPosts);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        alert('게시물을 불러오지 못했습니다.');
      });
  }, [currentPage]);
  return (
    <>
      <S.Title>
        <S.Titletext>정보공유</S.Titletext>
      </S.Title>
      <S.SearchBox placeholder="검색어를 입력해주세요"></S.SearchBox>
      <S.Search />
      <S.Container>
        <S.List>
          <InfoPost posts={posts} />
        </S.List>
        <S.Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
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
      <AddButton
        style={{
          visibility: grade === 2 || grade === 3 ? 'visible' : 'hidden',
        }}
        to="add"
      >
        +
      </AddButton>
    </>
  );
};

export default Info;
