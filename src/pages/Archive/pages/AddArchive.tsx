import axios from "axios";
import AddPost, { type IFormInput } from "../../../components/AddPost/AddPost";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
    const navigate = useNavigate();
    axios.post("api.url", {
        title: data.title,
        subTitle: data.subTitle,
        category: data.category,
        content: data.content,
        author: data.author,
    })
    .then((response) => {
        alert(response.data)
        navigate(-1);

    })
    .catch((error) => {
        alert(error.message)
    })
}

function AddArchive() {
    return (
        <AddPost onSubmit={handleSubmit}/>
    )
}


export default AddArchive;