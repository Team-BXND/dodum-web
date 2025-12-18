import Tile from "@/components/TileContents";
import * as S from "../../style";
import { useEffect, useState } from "react";
import AddButton from "@/components/AddButton";
import {privateInstance} from "@/api/axiosInstance.ts";

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
    // axios get 함수에는 Body를 담을 수 없어 post Method로 요청
    privateInstance.get(`${import.meta.env.VITE_SERVER_URL}/archive/all`, {
      category: props.category,
    })
      .then(function (response) {
        setPosts(response.data)
      })
      .catch(function (error) {
          alert(error.response?.status === 404? "게시물을 불러오지 못하였습니다.(404 에러)" : error.message);
        }
      )}, [props.category])

  //예시 오브젝트
  // useEffect(() => {
  //     setPosts([
  //     {
  //         id: "1",
  //         thumbnail: "https://play-lh.googleusercontent.com/eM6yGP8pECXPCZ8xWA9aDkDY2rusnpuMl8WZiYUZ2fHdTd0Sj8QwPois6xhVsv-h3g",
  //         title: "도담도담",
  //         author: "Team B1ND",
  //         description: "도담도담은 외출/외박 신청, 심야 자습 신청, 급식 확인, 기숙사 아침 기상송 확인, 학교와 기숙사 상벌점 조회, 퇴사 버스 신청, 학교 일정 조회 기능을 제공합니다."
  //     },
  //     {
  //         id: "2",
  //         thumbnail: "https://play-lh.googleusercontent.com/Nth0ZVjckj6_kWFOK3gBGHSvuC_MBDxJ4BsMJ0cLVUo5ee3HabHEtXSP1_SvJJJj3mPy=w480-h960-rw",
  //         title: "삑",
  //         author: "8Bit",
  //         description: "삑은 대구소프트웨어 마이스터 고등학교 실습동의 출석체크 및 관리 앱 입니다"
  //     },
  //     {
  //         id: "3",
  //         thumbnail: "https://play-lh.googleusercontent.com/nkrGLdoFHiz4Wz7QtXB7-e6Ll8DFDhPS3cbMxA4C4fPmIyli_i-6JBziilveRFZ8=w480-h960-rw",
  //         title: "큐빅",
  //         author: "Team C0nnect",
  //         description: "온라인 출석 관리 - QR 코드 및 본인인증: 학생들은 개별적으로 부여된 QR코드를 스캔하여 출석을 체크하고, 본인인증을 통해 출석을 완료할 수 있습니다. - 출석 현황: 사감선생님은 웹에 접속시 기숙사 내 학생들의 출석 현황을 모니터링 할 수 있어 학생들의 위치 파악이 용이합니다."
  //     }
  // ]);
  // }, [])

  return (
    <S.TileContainer>
      <AddButton to="/archive/add" />
      {posts.length === 0 ? <h1>게시글이 없습니다.</h1> : (posts.map((props: IPostsProps) => <Tile key={props.id} to={props.id} thumbnail={props.thumbnail} title={props.title} author={props.author} description={props.description} />))}
    </S.TileContainer>
  )
}

export default Posts;