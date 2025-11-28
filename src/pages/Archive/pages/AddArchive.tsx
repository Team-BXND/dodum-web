import axios from "axios";
import AddPost, { type IFormInput } from "../../../components/AddPost/AddPost";
import type { SubmitHandler } from "react-hook-form";

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
    axios.post("api.url", {
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
        alert(error.message)
    })
}

function AddArchive() {
    return (
        <AddPost onSubmit={handleSubmit} author/>
    )
}


export default AddArchive;