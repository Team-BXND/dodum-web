import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../../styles/Posts.style";
import Body from "@/components/Text/Body";

export interface IPosts {
  title: string;
  content: string;
  likes: number;
  images: string[];
  createdAt: string;
}

const Post = ({ elem }: { elem: IPosts }) => {
  return (
    <S.PostContainer>
      <S.Left>
        <S.Dot />
        <Body>{elem.title}</Body>
      </S.Left>
      <S.Right>
        <S.PostInfo>
          {elem.likes}
          {elem.createdAt}
        </S.PostInfo>
        <S.Image src={elem.images[0]} />
      </S.Right>
    </S.PostContainer>
  );
};

const Posts = ({ category }: { category: string }) => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    setTotalPage(9999);
  }, [])

  const getPosts = () => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/misc`, {
      params: {
        category: category,
        criteria: "LATEST",
        page: page,
      },
    })
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => {
      console.error(error);
      if (page > 1) {
        setPage((prev) => prev - 1);
      }
    });
  }

  useEffect(() => {
    getPosts()
  }, [category, page]);

  useEffect(() => {
    setPage(1)
  }, [category]);

  return (
    <S.Container>
      {posts && Array.isArray(posts) ? posts.map((elem, index) => (
        <Post key={index} elem={elem} />
      )) : <div>게시글이 없습니다.</div>}

      <S.StyledPagination
        previousLabel="<"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={totalPage}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        forcePage={page - 1}
      />
    </S.Container>
  );
};

export default Posts;