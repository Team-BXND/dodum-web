import PostPage from "@/components/PostPage/PostPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import type { IPostPageProps } from "@/components/PostPage/PostPage";
import NotFound from "./NotFound";

function Detail() {

    // const path = useLocation().pathname;

    // API 호출
    // const [post, setPost] = useState<IPostPageProps | null>(null)

    // useEffect(() => {
        
    //     const location = path.split("/");
    //     const postId = location[3];

    //     axios.post(`/archive/${postId}`, {
    //         archiveId: postId,
    //     })
    //     .then (function (response) {
    //         setPost(response.data);
    //     })
    //     .catch (function (error) {
    //         alert(error);
    //     })
    // }, [])

    // 예시 오브젝트
    const post = {
        title: "도담도담",
        subtitle: "스마트 스쿨로 학교의 새로운 패러다임을 만듭니다.",
        createdAt: "2025-10-03",
        body: "도담도담은 외출/외박 신청, 심야 자습 신청, 급식 확인, 기숙사 아침 기상송 확인, 학교와 기숙사 상벌점 조회, 퇴사 버스 신청, 학교 일정 조회 기능을 제공합니다. 2019년 개발을 시작해 2020년 출시한 도담도담은 바인드의...."
    }

    {return post && <PostPage {...post} /> || <NotFound/>}
}

export default Detail;