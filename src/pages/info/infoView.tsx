import * as S from './infoView.style';
import { useContext, useEffect, useState, useMemo } from 'react';
import { PageContext } from './Context/InfoPageContext';
import InfoPost from './infoPost';
import type { InfoListProps } from '@/types/infoList';
import { AddButton } from '../Archive/Archive.style';
import { infoItems } from '@/constants/info.constants';

const Info = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const [posts, setPosts] = useState<InfoListProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [allowFilter, setAllowFilter] = useState<'allowed' | 'notAllowed'>(
    'allowed'
  );
  const POSTS_PER_PAGE = 10;
  const grade = 2;
  // const endpoint = allowFilter === 'notAllowed' ? 'info/false' : 'info';
  // useEffect(() => {
  //   axios
  //     .get(`/info-api/${endpoint}`, {
  //       params: { page: currentPage - 1 },
  //       headers: { 'ngrok': 'true' },
  //     })
  //     .then((res) => {
  //       const fetchedPosts = res.data.data;
  //       if (currentPage === 1 && totalPages === 0 && fetchedPosts.length > 0) {
  //         const totalElements = fetchedPosts[0].id;

  //         setTotalPages(Math.ceil(totalElements / POSTS_PER_PAGE));
  //       }
  //       setPosts(fetchedPosts);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [currentPage, allowFilter]);
  //서버가 닫혀있어서 임시로 더미데이터 쓰겠습니다

  // 더미 데이터 사용
  useEffect(() => {
    const filteredAllPosts = infoItems[0].posts.filter((post) =>
      allowFilter === 'allowed' ? post.isApproved : !post.isApproved
    );

    setTotalPages(Math.ceil(filteredAllPosts.length / POSTS_PER_PAGE));

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    setPosts(filteredAllPosts.slice(startIndex, endIndex));
  }, [currentPage, allowFilter]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      searchKeyword.trim()
        ? post.title?.toLowerCase().includes(searchKeyword.toLowerCase())
        : true
    );
  }, [posts, searchKeyword]);
  return (
    <>
      <S.Title>
        <h1>정보공유</h1>
      </S.Title>
      <S.AllowBox>
        <S.AllowButton
          $active={allowFilter === 'allowed'}
          onClick={() => setAllowFilter('allowed')}
        >
          승인
        </S.AllowButton>
        <S.AllowButton
          $active={allowFilter === 'notAllowed'}
          onClick={() => setAllowFilter('notAllowed')}
        >
          미승인
        </S.AllowButton>
      </S.AllowBox>
      <S.SearchBox
        placeholder="검색어를 입력해주세요"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      ></S.SearchBox>
      <S.Search />
      <S.Container>
        <S.List>
          <InfoPost posts={filteredPosts} />
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
