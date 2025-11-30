import axios from 'axios';
import AddInfoPost, { type IFormInput } from '../Add/AddInfoPost';
import type { SubmitHandler } from 'react-hook-form';

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
  axios
    .post(`/contest`, {
        title: data.title,
        subtitle: data.subtitle,
        content: data.content,
        email: data.email,
        phone: data.phone,
        time: data.time,
        place: data.place,
        image: data.image,
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