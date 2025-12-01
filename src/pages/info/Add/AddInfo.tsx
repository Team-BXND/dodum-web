import axios from 'axios';
import AddInfoPost, { type IFormInput } from '../Add/AddInfoPost';
import type { SubmitHandler } from 'react-hook-form';

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
  axios
    .post(`/info-api/info`, {
      title: data.title,
      subTitle: data.subTitle,
      content: data.content,
      author: data.author,
    })
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => {
      alert(error.message);
    });
};

function AddInfo() {
  return <AddInfoPost onSubmit={handleSubmit} />;
}

export default AddInfo;
