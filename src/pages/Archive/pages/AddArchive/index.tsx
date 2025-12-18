import AddPost, { type IFormInput } from '@/components/AddPost';
import type { SubmitHandler } from 'react-hook-form';
import {privateInstance} from "@/api/axiosInstance.ts";

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
  privateInstance
    .post(`${import.meta.env.VITE_SERVER_URL}/archive/write`, {
      title: data.title,
      subTitle: data.subTitle,
      category: data.category,
      content: data.content,
      teamname: data.author,
      thumbnail: data.thumbnail,
    })
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => {
      alert(error.message);
    });
};

const handleEditSubmit: SubmitHandler<IFormInput> = (data) => {
  privateInstance
    .patch(`${import.meta.env.VITE_SERVER_URL}/archive`, {
      title: data.title,
      subTitle: data.subTitle,
      category: data.category,
      content: data.content,
      teamname: data.author,
      thumbnail: data.thumbnail,
    })
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => {
      alert(error.message);
    });
};

const Category = {
  club: '동아리',
  narsha: '나르샤',
  awards: '대회 수상작',
  mini_project: '미니 프로젝트',
};

function AddArchive({ value, isEdit }: { value?: string; isEdit?: boolean }) {
  if (value) {
    return (
      <AddPost
        onSubmit={isEdit ? handleEditSubmit : handleSubmit}
        subtitle
        author
        category={Category}
        value={value}
      />
    );
  } else {
    return (
      <AddPost
        onSubmit={isEdit ? handleEditSubmit : handleSubmit}
        subtitle
        author
        category={Category}
      />
    );
  }
}

export default AddArchive;
