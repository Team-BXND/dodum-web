import InfoAlter from './infoAlter';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '@/constants/api';

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
    try {
      await axios.put(`${SERVER_URL}/info/${state.id}`, data);
      alert('수정 완료!');
      navigate(-1);
    } catch (error) {
      alert('수정 실패');
    }
  };

  return <InfoAlter onSubmit={onSubmit} />;
};

export default AlterPage;
