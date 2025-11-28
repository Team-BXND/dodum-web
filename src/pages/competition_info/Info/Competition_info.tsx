import * as S from "@/pages/competition_info/Competition_info.style.ts";
import { useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
const Competition_info = () => {
  const [clickalarm , setClickalarm] = useState(false);
  const location = useLocation();
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    axios.get("/contest", {
      params: {
        page: 1
      }
    }).then((response) => {
      setPosts(response.data.data);
    })
  }, []);
  useEffect(()=>{
    if (location.state) {
      setPosts((prev) => [location.state, ...prev]);
    }
  },[location.state]);
  const onClickAlarm = () => {
    if (clickalarm === false){
      setClickalarm(true);
    } else {
      setClickalarm(false);
    }
  }
  const navigate = useNavigate();
  const onClickAdd=()=>{
    navigate("/competition_info_add");
  }

  return (
    <>
      <S.PageTitle>대회정보</S.PageTitle>
      <S.Navigator>대회정보 &gt; 글보기</S.Navigator>
      <S.TitleLine></S.TitleLine>
      <S.Cardmatrix>
      <S.Cardcover>
        <S.Card_top>
          <S.Alarm src={clickalarm ? "src/assets/limit_alarm.png" : "src/assets/set_alarm.png"} onClick={onClickAlarm}></S.Alarm>
        </S.Card_top>
        <S.Comp_card>
          <S.Compimg></S.Compimg>
          <S.Tilecover>
            <S.Tiletitle>마이다스 해커톤</S.Tiletitle>
            <S.Tilebody>서울 강남구</S.Tilebody>
          </S.Tilecover>
          <S.Detail>
          <S.Tilebody>Tel : 010-4604-4029</S.Tilebody>
          <S.Tilebody>E-mail : aa01046044029@gmail.com</S.Tilebody>
          <S.Tilebody>time : 9월9일~9월10일</S.Tilebody>
          </S.Detail>
        </S.Comp_card>
      </S.Cardcover>
      {posts.map((post, index) => (
        <S.Cardcover key={index}>
          <S.Card_top>
            <S.Alarm src={clickalarm ? "src/assets/limit_alarm.png" : "src/assets/set_alarm.png"} onClick={onClickAlarm}></S.Alarm>
          </S.Card_top>
          <S.Comp_card onClick={() => {
            navigate(`/competition_info_writing/${post.id}`, { state: post });
          }}>
            <S.Compimg src={post.image}></S.Compimg>
            <S.Tilecover>
              <S.Tiletitle>{post.title}</S.Tiletitle>
              <S.Tilebody>{post.subtitle}</S.Tilebody>
            </S.Tilecover>
            <S.Detail>
            <S.Tilebody>Tel : {post.phone}</S.Tilebody>
            <S.Tilebody>E-mail : {post.email}</S.Tilebody>
            <S.Tilebody>time : {post.time}</S.Tilebody>
            </S.Detail>
          </S.Comp_card>
        </S.Cardcover>
      ))}
    </S.Cardmatrix>
    <S.add>
      <S.Plus src="src/assets/image.png" onClick={onClickAdd}></S.Plus>
    </S.add>
    </>
  );
};

export default Competition_info;

