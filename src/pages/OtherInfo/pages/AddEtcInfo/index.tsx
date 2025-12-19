import AddPost, { type IFormInput } from "@/components/AddPost";
import type { SubmitHandler } from "react-hook-form";
import {privateInstance} from "@/api/axiosInstance.ts";

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
    privateInstance.post(`${import.meta.env.VITE_SERVER_URL}/misc`, {
        title: data.title,
        category: data.category,
        content: data.content,
    })
    .then((response) => {
        alert(response.data)

    })
    .catch((error) => {
        alert(error.message)
    })
}

const Category = {
        school: '학교지원',
        tools: '개발도구',
        courses: '강의추천',
}

function AddEtcInfo() {
    return (
        <AddPost onSubmit={handleSubmit} category={Category}/>
    )
}


export default AddEtcInfo;