import styled from 'styled-components';

export const Container = styled.div`
  min-width: 1076px;
  min-height: 105px;
  max-width: max-content;
  max-height: max-content;
  padding-left: 20px;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: 85px;
  max-height: max-content;
  display: flex;
`;

export const DividingLine = styled.hr`
  margin: 0px;
  width: 679px;
  height: 0px;
  border: 1px solid #e3e3e3;
`;

export const SubContent = styled.div`
  margin-left: 12px;
  min-width: max-content;
  min-height: max-content;
  h2 {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* 상자 높이와 동일 */
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;

    color: #1b1b1b;
  }

  h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 8px;
    letter-spacing: -0.05em;

    color: #1b1b1b;
  }

  h4 {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* 상자 높이와 동일 */
    margin-top: 8px;
    letter-spacing: -0.02em;

    color: #adadad;
  }
`;
