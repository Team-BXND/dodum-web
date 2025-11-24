import axios from 'axios';
import AddInfoPost, { type IFormInput } from '../Add/AddInfoPost';
import type { SubmitHandler } from 'react-hook-form';

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
  axios
    .post('api.url', {
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
  console.log('test')
};

function AddInfo() {
  return <AddInfoPost onSubmit={handleSubmit} />;
}

export default AddInfo;
