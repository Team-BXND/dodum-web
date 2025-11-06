import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 5.125rem;
  margin-bottom: 0;
  margin-left: 4.375rem;
`;

export const TitleLine = styled.hr`
  width: 69.5rem;
  color: #000000;
  opacity: 0.2;
  border-style: dotted;
`;

export const Navigator = styled.h1`
  font-size: 1.25rem;
  color: #adadad;
  margin-top: 0.5rem;
  margin-bottom: 0;
  margin-left: 4.375rem;
  font-weight: 400;
`;

export const Card = styled.div`
  width: 69.5rem;
  height: auto;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin-left: 4.375rem;
  align-items: center;
`;

export const TitleCover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.75rem;
`;

export const Title = styled.input`
  font-size: 2.75rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.5rem;
  width: 62.625rem;
  border: 1px solid #adadad;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #adadad;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  &::placeholder {
    color: #adadad;
  }
`;

export const SubTitle = styled.input`
  color: #adadad;
  font-size: 1.75rem;
  font-weight: 500;
  border: 1px solid #adadad;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 0;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  width: 62.625rem;
  &::placeholder {
    color: #adadad;
  }
`;

export const DetailCover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextArea = styled.textarea`
  width:62.625rem;
  font-size:1.5rem;
  height:auto;
  min-height:40rem;
  margin-top:0.5rem;
  border:none;
  &::placeholder {
  color: #adadad;
  }

`

export const PostButton=styled.button`
  width:4.75rem;
  height:2.18rem;
  background-color:#26874E;
  color:#FFFFFF;
  font-weight:500;
  font-size:1rem;
  border-radius:8px;
  margin-top:0.75rem;
  margin-left:55.125rem;
  margin-bottom:2rem;
  border:none;

`
export const ButtonCover=styled.div`
  display:flex;
  flex-direction:row;
`

export const ExceptButton=styled.button`
  width:4.75rem;
  height:2.18rem;
  background-color:#949494;
  color:#FFFFFF;
  font-weight:500;
  font-size:1rem;
  border-radius:8px;
  margin-top:0.75rem;
  margin-left:0.625rem;
  margin-bottom:2rem;
  border:none;

`

export const Comp_card=styled.div`
  width:21.875rem;
  height:26.5rem;
  display:flex;
  flex-direction:column;
  gap:1rem;
  background-color:#FFFFFF;
  border-radius:0 0 16px 16px;
  box-shadow:0px 0px 5.43px 0px rgba(0, 0, 0, 0.05),
  0px 2.71px 5.43px 0px rgba(0, 0, 0, 0.05);
  align-items:center;
`

export const Card_top=styled.div`
  width:21.875rem;
  height:2.8rem;
  background-color:#ffffff;
  border-radius:16px 16px 0 0;
`

export const Tiletitle=styled.h1`
  font-weight:700;
  font-size:1.5rem;
  color:#1B1B1B;
`

export const Tilebody=styled.h1`
  font-weight:400;
  font-size:1rem;
  color:#ADADAD;

`

export const Cardcover=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-left:5rem;
`

export const Compimg=styled.img`
  width:19.375rem;
  height:16.25rem;
  margin-top:1.25rem;
  margin-bottom:0.625rem;
  border-radius:14px;

`

export const Tilecover=styled.div`
  display:flex;
  flex-direction:row;
  gap:0.25rem;
  width:19.375rem;
`
