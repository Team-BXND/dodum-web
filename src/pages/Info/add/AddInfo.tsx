import AddInfoPost, { type IFormInput } from '@/pages/Info/add/AddInfoPost';
import type { SubmitHandler } from 'react-hook-form';
import { SERVER_URL } from '@/constants/api';
import { useNavigate } from 'react-router-dom';
import {privateInstance} from "@/api/axiosInstance.ts";

function AddInfo() {
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<IFormInput> = (data) => {
    privateInstance
      .post(
        `${SERVER_URL}/info`,
        {
          title: data.title,
          content: data.content,
          author: data.author,
        },
        { timeout: 3000 }
      )
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
