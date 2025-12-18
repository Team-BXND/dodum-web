import AddInfoPost, { type IFormInput } from '../Add/AddInfoPost';
import type { SubmitHandler } from 'react-hook-form';
import {privateInstance} from "@/api/axiosInstance.ts";

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
  const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL.toString();
  privateInstance
    .post(`${VITE_SERVER_URL}/contest`, {
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