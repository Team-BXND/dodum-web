import axios from "axios";
import AddPost, { type IFormInput } from "../../../components/AddPost/AddPost";
import type { SubmitHandler } from "react-hook-form";

function AddArchive() {
    const handleSubmit: SubmitHandler<IFormInput> = (data) => {
    axios.post("/api", {
        title: data.title,
        subTitle: data.subTitle,
        category: data.category,
        content: data.content,
        author: data.author,
    })
    .then((response) => {
        alert(response.data)

    })
    .catch((error) => {
        alert(`데이터를 불러오는데 실패했습니다. (${error.response.status})`)
    })
}

    return (
        <AddPost onSubmit={handleSubmit}/>
    )
}


export default AddArchive;