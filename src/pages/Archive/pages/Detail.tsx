import PostPage from "@/components/PostPage/PostPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Detail() {

    const [location, setLocation] = useState<string[]>([]);
    const path = useLocation().pathname;

    useEffect(() => {
        setLocation(path.split("/"));
        const postId = location[3];

        axios.post(`/archive/${postId}`, {
            archiveId: postId,
        })
        .then (function (response) {
            console.log(response);
        })
        .catch (function (error) {
            alert(error);
        })
    }, [])

    return (
        <PostPage/>
    )
}

export default Detail;