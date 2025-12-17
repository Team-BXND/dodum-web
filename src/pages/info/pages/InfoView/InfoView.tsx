import * as S from './InfoView.style';
import { useContext, useEffect, useState, useMemo } from 'react';
import { PageContext } from '../../Context/InfoPageContext';
import InfoPost from '../../components/InfoPost';
import type { InfoListProps } from '@/types/infoList';
import { AddButton } from '../../../Archive/Archive.style';
import axios from 'axios';
import { SERVER_URL } from '@/constants/api';
import { useLocation } from 'react-router-dom';
import SubTitle from '@/components/Text/SubTitle';

const Info = () => {
  const location = useLocation();

  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState<{
    type: 'success' | 'fail';
    message: string;
  } | null>(null);

  const { currentPage, setCurrentPage } = useContext(PageContext);
  const [posts, setPosts] = useState<InfoListProps[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [allowFilter, setAllowFilter] = useState<'allowed' | 'notAllowed'>(
    'allowed'
  );
  const [showSkeleton, setShowSkeleton] = useState(true);

  const POSTS_PER_PAGE = 10;
  const grade = 2;
  const endpoint = allowFilter === 'notAllowed' ? 'info/false' : 'info';
  useEffect(() => {
    const controller = new AbortController();
    let skeletonTimer: NodeJS.Timeout;
    const fetchedPost = async () => {
      setShowSkeleton(true);
      skeletonTimer = setTimeout(() => {
        setShowSkeleton(false);
      }, 8000);
      axios
        .get(`${SERVER_URL}/${endpoint}`, {
          params: { page: currentPage - 1 },
          signal: controller.signal,
        })
        .then((res) => {
          const fetchedPosts: InfoListProps[] = res.data?.data ?? [];
          const totalElements = 15;

          setTotalPages(Math.ceil(totalElements / POSTS_PER_PAGE));
          setPosts(fetchedPosts);
        })
        .catch((err) => {
          if (axios.isAxiosError(err)) {
            console.error(err.response?.data || err.message);
          } else {
            console.error(err);
          }
        })
        .finally(() => {
          setShowSkeleton(false);
        });
    };

    fetchedPost();
    return () => {
      controller.abort();
      clearTimeout(skeletonTimer);
    };
  }, [currentPage, allowFilter]);

  useEffect(() => {
    if (location.state?.toast) {
      setToast(location.state.toast);
      setShowToast(true);
      window.history.replaceState({}, document.title);

      const timer = setTimeout(() => {
        setToast(null);
        setShowToast(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      searchKeyword.trim()
        ? post.title?.toLowerCase().includes(searchKeyword.toLowerCase())
        : true
    );
  }, [posts, searchKeyword]);
  return (
    <>
      {toast && (
        <S.ToastContainer>
          <S.ToastCircle>
            <S.Check></S.Check>
          </S.ToastCircle>
          <S.ToastTextContainer>
            <SubTitle color="#26874e">{toast.message}</SubTitle>
          </S.ToastTextContainer>
        </S.ToastContainer>
      )}

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
          <InfoPost posts={filteredPosts} loading={showSkeleton} />
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
