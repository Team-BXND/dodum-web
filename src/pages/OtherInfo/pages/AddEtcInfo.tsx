import axios from "axios";
import AddPost, { type IFormInput } from "../../../components/AddPost/AddPost";
import type { SubmitHandler } from "react-hook-form";

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
    axios.post("api.url", {
        title: data.title,
        subTitle: data.subTitle,
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