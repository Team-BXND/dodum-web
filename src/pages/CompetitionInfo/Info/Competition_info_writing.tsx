import * as S from '@/pages/CompetitionInfo/style';
import { useState,useEffect } from 'react';
import { useLocation,useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import {privateInstance} from "@/api/axiosInstance.ts";
const Competition_info_writing=()=>{
    const navigate=useNavigate();
    interface CompetitionData {
    title: string
    content: string
    email: string
    phone: string
    time: Date
    place: string
    image: string
    }
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState<CompetitionData | null>(null);
    const {id}=useParams();
    const location=useLocation();
    const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL.toString();
    useEffect(()=>{
        privateInstance.get(`${VITE_SERVER_URL}/contest/${id}`,{
            params:{
                page:1
            }
        }).then((response)=>{
            setData(response.data.data);
        })
    },[]);

    const onClickDotted=()=>{
        setIsClicked(true);
    }

    const onClickDelete=()=>{
        privateInstance.delete(`${VITE_SERVER_URL}/contest/${id}`)
        .then((response)=>{
            alert("삭제되었습니다.");
            window.location.replace("/competition_info");
        })
    }
    const onClickModify=()=>{
        navigate(`/competition_info_modify/${id}`,{state:{data}});
    }
    return(
        <>
        <S.Card>
        <S.WritingtitleCover>
        <S.WritingTitle>{data?.title}</S.WritingTitle>
        <S.DottedCover onClick={onClickDotted}>
            <S.Dotted></S.Dotted>
            <S.Dotted></S.Dotted>
            <S.Dotted></S.Dotted>
        </S.DottedCover>
        <S.ModifyWrapper opacity={isClicked ? 1 : 0} >
            <S.Modify onClick={onClickModify}>수정</S.Modify>
            <S.Modify onClick={onClickDelete}>삭제</S.Modify>
        </S.ModifyWrapper>
        </S.WritingtitleCover>
        <S.TitleLine></S.TitleLine>
        <S.Body>이메일: {data?.email}</S.Body>
        <S.Body>전화번호: {data?.phone}</S.Body>
        <S.Body>시간: {data?.time?.toLocaleString()}</S.Body>
        <S.Body>장소: {data?.place}</S.Body>
        <S.PreviewImage src={data?.image.startsWith("http") ? data?.image : `/contest/${data?.image}`}
    alt="대회 이미지"></S.PreviewImage>
        <S.Body><ReactMarkdown>{data?.content}</ReactMarkdown></S.Body>
        </S.Card>
        </>
    )
}

export default Competition_info_writing;