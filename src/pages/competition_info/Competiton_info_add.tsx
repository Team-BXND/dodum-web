import * as S from './Competition_info.style';
const Competition_info_add=()=>{
    return(
        <>
        <S.PageTitle>대회정보</S.PageTitle>
        <S.Navigator>대회정보 &gt; 글쓰기</S.Navigator>
        <S.TitleLine></S.TitleLine>
        <S.Card>
        <S.TitleCover>
        <S.Title placeholder="제목을 입력하세요"></S.Title>
        <S.SubTitle placeholder="부제목을 입력하세요"></S.SubTitle>
        </S.TitleCover>
        <S.DetailCover>
        <S.SubTitle placeholder="장소를 입력하세요"></S.SubTitle>
        <S.SubTitle placeholder="전화번호를 입력하세요"></S.SubTitle>
        <S.SubTitle placeholder="이메일을 입력하세요"></S.SubTitle>
        <S.SubTitle placeholder="시간을 입력하세요"></S.SubTitle>
        </S.DetailCover>
        </S.Card>
        </>
    )
}

export default Competition_info_add;