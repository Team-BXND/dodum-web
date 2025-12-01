import axios from 'axios';
import AddInfoPost, { type IFormInput } from '../Add/AddInfoPost';
import type { SubmitHandler } from 'react-hook-form';
import { SERVER_URL } from '@/constants/api';
const handleSubmit: SubmitHandler<IFormInput> = (data) => {
  axios
    .post(`${SERVER_URL}/info`, {
      title: data.title,
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
