import * as S from "./Competition_info.style";
const Competition_info = () => {
  return (
    <>
      <S.PageTitle>대회정보</S.PageTitle>
      <S.Navigator>대회정보 &gt; 글보기</S.Navigator>
      <S.TitleLine></S.TitleLine>
      <S.Cardcover>
        <S.Card_top></S.Card_top>
        <S.Comp_card>
          <S.Compimg></S.Compimg>
          <S.Tilecover>
            <S.Tiletitle>마이다스 해커톤</S.Tiletitle>
            <S.Tilebody>서울 강남구</S.Tilebody>
          </S.Tilecover>
        </S.Comp_card>
      </S.Cardcover>
    </>
  );
};

export default Competition_info;

