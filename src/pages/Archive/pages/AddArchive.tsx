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

const Category = {
  club: "동아리",
  narsha: "나르샤",
  awards: "대회 수상작",
  mini_project: "미니 프로젝트"
}

function AddArchive({ value }: { value?: string }) {
  if (value) {
    return <AddPost onSubmit={handleSubmit} author category={Category} value={value} />
  } else {
    return <AddPost onSubmit={handleSubmit} author category={Category} />
  }
}


export default AddArchive;