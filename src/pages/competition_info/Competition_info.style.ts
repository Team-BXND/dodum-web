import styled from "styled-components";
export const PageTitle = styled.h1`
  font-size: 2vw;
  font-weight: 700;
  margin-top: 8.3vh;
  margin-bottom: 0;
  margin-left: 4.5vw;
`;

export const TitleLine = styled.hr`
  width: 74vw;
  color: #000000;
  opacity: 0.2;
`;

export const Navigator = styled.h1`
  font-size: 1.3vw;
  color: #adadad;
  margin-top: 0.5vh;
  margin-bottom: 0;
  margin-left: 4.5vw;
  font-weight: 400;
`;

export const Card = styled.div`
  width: 74vw;
  height: auto;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin-left: 4.5vw;
`;

export const TitleCover = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4vw;
  gap: 0.8vh;
  margin-top: 4vh;
  margin-bottom: 4.4vh;
`;

export const Title = styled.input`
  font-size: 3vw;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.8vh;
  width: 66.2vw;
  border: 1px solid #adadad;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #adadad;
  padding-bottom: 0.8vh;
  padding-top: 0.8vh;
  &::placeholder {
    color: #adadad;
  }
`;

export const SubTitle = styled.input`
  color: #adadad;
  font-size: 1.8vw;
  font-weight: 500;
  border: 1px solid #adadad;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 0;
  padding-bottom: 0.8vh;
  padding-top: 0.8vh;
  width: 66.2vw;
  &::placeholder {
    color: #adadad;
  }
`;

export const DetailCover = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  margin-left: 4vw;
  gap: 0.8vh;
`;

export const TextArea = styled.textarea`
  width:66.2vw;
  font-size:1.5vw;
  margin-left:4vw;
  height:auto;
  min-height:40vh;
  margin-top:0.8vh;
  border:none;
  &::placeholder {
  color: #adadad;
  }

`

export const PostButton=styled.button`
  width:5vw;
  height:3.5vh;
  background-color:#26874E;
  color:#FFFFFF;
  font-weight:500;
  font-size:1vw;
  border-radius:8px;
  margin-top:1.2vh;
  margin-left:59vw;
  margin-bottom:4vh;
  border:none;

`
export const ButtonCover=styled.div`
  display:flex;
  flex-direction:row;
`

export const ExceptButton=styled.button`
  width:5vw;
  height:3.5vh;
  background-color:#949494;
  color:#FFFFFF;
  font-weight:500;
  font-size:1vw;
  border-radius:8px;
  margin-top:1.2vh;
  margin-left:0.6vw;
  margin-bottom:4vh;
  border:none;

`

export const Comp_card=styled.div`
  width:23vw;
  height:43vh;
  display:flex;
  flex-direction:column;
  gap:1vh;
  background-color:#FFFFFF;
`

export const Card_top=styled.div`
  width:23vw;
  height:4.5vh;
  background-color:#ffffff;
`

export const Tiletitle=styled.h1`
  font-weight:700;
  font-size:1.5vw;
  color:#1B1B1B;
`

export const Tilebody=styled.h1`
  font-weight:400;
  font-size:1vw;

`

export const Cardcover=styled.div`
display:flex;
flex-direction:column;
`