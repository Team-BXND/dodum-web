import axios from 'axios';
import ModifyPost, { type IFormInput } from '@/pages/competition_info/Modify/ModifyPost.tsx';
import type { SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL.toString();
const [id, setId] = useState<number | null>(null);
function Modify() {
  return <ModifyPost onSubmit={handleSubmit} setId={setId}/>;
}

const handleSubmit: SubmitHandler<IFormInput> = (data) => {
  axios
    .put(`${VITE_SERVER_URL}/contest/${id}`, {
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

export default Modify;