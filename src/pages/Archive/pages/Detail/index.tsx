import PostPage from "@/components/PostPage";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { IPostPageProps } from "@/components/PostPage";
import NotFound from "@/components/NotFound";
import {privateInstance} from "@/api/axiosInstance.ts";

function Detail() {

    const path = useLocation().pathname;
    const navigate = useNavigate()

    // API 호출
    const [post, setPost] = useState<IPostPageProps | null>(null)

    useEffect(() => {
        const location = path.split("/");
        const postId = location[3];

        privateInstance.get(`${import.meta.env.VITE_SERVER_URL}/archive/${postId}`, {
            params: {
                archiveId: postId,
            }
        })
        .then (function (response) {
            setPost(response.data);
        })
        .catch (function (error) {
            alert(error.response?.status === 404? "해당 게시물이 존재하지 않습니다." : error.message);
            navigate(-1);
        })
    }, [])

    {return post && <PostPage {...post} /> || <NotFound/>}
}

export default Detail;