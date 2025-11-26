import Tile from "@/components/TileContents/TileContents";
import * as S from "../Archive.style";
import axios from "axios";
import { useEffect, useState } from "react";

interface IPostsProps {
  id: string,
  thumbnail?: string,
  title: string,
  author: string,
  description: string,
}

interface IPageProps {
  category: string,
}

function Posts(props: IPageProps) {
  // API 호출
  const [posts, setPosts] = useState<IPostsProps[]>([])

  useEffect(() => {
    axios.get('/api', {
      params: {
        category: props.category
      }
    })
      .then(function (response) {
        if (Array.isArray(response.data)) {
            setPosts(response.data);
        } else {
            setPosts([]);
        }
      })
      .catch(function (error) {
        alert(error.response?.status === 404 ? "게시물을 불러오지 못하였습니다.(404 에러)" : error.message);
      }
      )
  }, [props.category])

  return (
    <S.TileContainer>
      <S.AddButton to="add">+</S.AddButton>
      {posts.length === 0 ? <h1>게시글이 없습니다.</h1> : (posts.map((props: IPostsProps) => <Tile key={props.id} to={props.id} thumbnail={props.thumbnail} title={props.title} author={props.author} description={props.description} />))}
    </S.TileContainer>
  )
}

export default Posts;