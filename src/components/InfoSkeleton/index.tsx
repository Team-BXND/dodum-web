import styled from 'styled-components';
import { Skeleton } from 'antd';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* 왼쪽과 오른쪽 스켈레톤 간격 */
`;

const RightSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10px; /* 왼쪽에서 띄워 오른쪽으로 이동 */
`;

const InfoSkeleton = ({
  isLoading,
  item,
}: {
  isLoading: boolean;
  item: any;
}) => (
  <Container>
    {/* 왼쪽 스켈레톤 */}

    <Skeleton
      active
      avatar={{ size: 'small', shape: 'circle' }}
      title={false}
      paragraph={{
        rows: 2,
        width: ['50%', '20%'],
      }}
    />

    {/* 오른쪽 스켈레톤, 하단만 표시 */}
    <Skeleton
      active
      title={false}
      paragraph={{
        rows: 2,
        width: ['0%', '50%'], // 첫 줄 숨기고 아래줄만 표시
      }}
    />

    <Skeleton.Button
      active
      shape="default"
      style={{ width: 70, height: 70, borderRadius: 8 }}
    />
  </Container>
);

export default InfoSkeleton;
