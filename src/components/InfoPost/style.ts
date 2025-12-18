import styled from 'styled-components';
import { Empty } from 'antd';

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const EmptyBox = styled(Empty)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ant-empty-image {
    width: 120px;
    height: 120px;
    img {
      object-fit: contain;
    }
  }

  .ant-empty-description {
    color: #555;
    font-size: 18px;
    font-weight: 500;
  }
  margin-bottom: 50px;
`;


export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; /* 아이템 간 간격 */
`;