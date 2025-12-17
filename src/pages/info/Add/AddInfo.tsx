import axios from 'axios';
import AddInfoPost, { type IFormInput } from './AddInfoPost';
import type { SubmitHandler } from 'react-hook-form';
import { SERVER_URL } from '@/constants/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddInfo() {
  const [showToast, setShowToast] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<IFormInput> = (data) => {
    axios
      .post(`${SERVER_URL}/info`, {
        title: data.title,
        content: data.content,
        author: data.author,
      })
      .then(() => {
        navigate('/info', {
          state: {
            toast: {
              type: 'success',
              message: '글이 추가 완료 되었어요!',
            },
          },
        });
      })
      .catch((error) => {
        console.error(error);
        navigate('/info', {
          state: {
            toast: {
              type: 'fail',
              message: '글이 추가되지 못했어요',
            },
          },
        });
      });
  };

  return <AddInfoPost onSubmit={handleSubmit} />;
}

export default AddInfo;
