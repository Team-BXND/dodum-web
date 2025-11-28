import * as S from '@/pages/competition_info/Competition_info.style.ts';
import { useState,useEffect } from 'react';
import { useLocation,useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
const Competition_info_writing=()=>{
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
    useEffect(()=>{
        axios.get(`contest/${id}`,{
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
        axios.delete(`contest/${id}`)
        .then((response)=>{
            alert("삭제되었습니다.");
            window.location.replace("/competition_info");
        })
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
            <S.Modify>수정</S.Modify>
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