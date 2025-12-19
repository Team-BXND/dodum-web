import { useLocation, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '@/constants/api';
import InfoAlter from '.';
import {privateInstance} from "@/api/axiosInstance.ts";

export interface IFormInput {
  title: string;
  content: string;
  author: string;
}
const AlterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const onSubmit = async (data: IFormInput) => {
    privateInstance
      .put(`${SERVER_URL}/info/${state.id}`, data)
      .then((respone) => {
        alert('수정 완료!');
        navigate(-1);
      })
      .catch((error) => {
        alert('수정 실패');
      });
  };

  return <InfoAlter onSubmit={onSubmit} />;
};

export default AlterPage;
