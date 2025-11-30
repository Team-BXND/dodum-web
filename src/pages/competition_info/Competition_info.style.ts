import styled from "styled-components";
import ReactQuill from "react-quill";

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
  color:#1B1B1B;
  letter-spacing:-0.02rem;
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
   &:hover{
  background-color:#F7F7F7;
}
`

export const Card_top=styled.div`
  width:21.875rem;
  height:2.8rem;
  background-color:#ffffff;
  border-radius:16px 16px 0 0;
  display:flex;
  align-items:center;
  justify-content:right;
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
  margin-left:0;
  margin-right:0;
  &:hover{
  background-color:#F7F7F7;
}
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
  align-items: flex-end;
`

export const Detail=styled.div`
  display:flex;
  flex-direction:column;
  width:19.375rem;
`
export const Cardmatrix=styled.div`
  display:flex;
  flex-direction:row;
  gap:2rem;
  margin-left:4.375rem;
  margin-bottom:1.5rem;
`
export const Alarm=styled.img`
  width:2rem;
  margin-right:1rem;
`

export const Body=styled.h1`
  margin-top:4rem;
  font-weight:400;
  font-size:1.3rem;
  color:#1B1B1B;
  margin-top:4rem;
  margin-bottom:4rem;
  margin-left:3.3rem;
`

export const WritingtitleCover=styled.div`  
  width:100%;
  display:flex;
  flex-direction:row;
`

export const WritingTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-left:3.125rem;
  color: #1B1B1B;
  margin-bottom:2.8rem;
`;

export const Dotted=styled.div`
  width:0.31rem;
  hegiht:0.31rem;
  background-color:#ADADAD;
  border-radius:50%;
`

export const DottedCover=styled.div`
  display:flex;
  flex-direction:column;
  gap:0.375rem;
  margin-left:46.75rem;
  margin-top:1.25rem;
`

export const add=styled.button`
  width:5.25rem;
  height:5.25rem;
  background-color:#26874E;
  border-radius:50%;
  position:fixed;
  right:1.75rem;
  bottom:1.75rem;
  border:none;
`

export const Plus=styled.img`
width:2.1rem;
height:2.1rem;
`

export const Errortext=styled.h1`
  font-size:0.75rem;
  color:#FF0000;
`
export const ErrorCover=styled.div`
  display: flex;
  flex-direction: column;
  gap:0.25rem;
  justify-content: center;
  align-items: center;
`

export const PreviewImage=styled.img`
  width:50rem;
  height:auto;
  margin-top:1rem;
  margin-bottom:1rem;
`

export const bottombar=styled.div`
display:flex;
flex-direction:row;
align-items:left;
width:62.625rem;
`

interface ModifyWrapperProps {
  opacity?: number;
}

export const ModifyWrapper = styled.div<ModifyWrapperProps>`
  width:6rem;
  height:4.375rem;
  border-radius:12px;
  border:1px solid #adadad;
  background-color:#ffffff;
  display:flex;
  flex-direction:column;
  position:absolute;
  top:5rem;
  right:9rem;
  opacity:${(props) => props.opacity || 0};
`

export const Modify=styled.button`
  width:100%;
  height:2.2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#ADADAD;
  &:hover{
  color:#1B1B1B;
  background-color:#FAFAFA;
  }
`