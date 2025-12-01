import * as S from "@/pages/Login/Login.style.ts"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import { api } from "./api.ts";
import { useSignupStore } from "./SignupStore";

const Member2=() => {
    const {username,email,grade,class_no,phone,setSignup}=useSignupStore();
    const [value,setValue]=useState([0,0,0]);
    const { register, handleSubmit, formState: { errors },setError,watch } = useForm();
    const navigate=useNavigate();
    const onValid=(data:any)=>{
        setSignup({
            username:watch("username"),
            email:watch("email"),
            grade:value[0],
            class_no:value[1],
            student_no:value[2],
            phone:watch("phone")})
            api.post("/auth/email/send",{ email:watch("email"),
            }).then((response)=>{
                if(response.data.success){
                navigate("/certification",{state:{code:response.data.code,email:watch("email")}});
                }
                else{
                    setError("email",{message:"이메일 인증번호 발송에 실패했습니다. 다시 시도해주세요."})
                }
            })
    }
    const onChangeValue=(index:number,event:any)=>{
        const newValue=[...value];
        newValue[index]=event.target.value;
        setValue(newValue);
    }
    return<form onSubmit={handleSubmit(onValid)}>
            <S.InputCover>
                <S.InputTitle>이메일 주소</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="이메일 주소를 입력해주세요." {...register("email",{required:"이메일 주소를 작성하여 주세요"})} style={errors.email?.message ? { borderColor: "#FF3E3E" } : {borderColor:"#9B9B9B"}} $placeholderColor={errors.email?.message ? "#FF3E3E":undefined}/>
                <S.ErrorMessage>{errors.email?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
                <S.InputTitle>학번</S.InputTitle>
                <S.SelectCover>
                    <S.Select onChange={(event)=>onChangeValue(0,event)}>
                        <option>학년</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </S.Select>
                    <S.Select onChange={(event)=>onChangeValue(1,event)}>
                        <option>반</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </S.Select>
                    <S.Select onChange={(event)=>onChangeValue(2,event)}>
                        <option>번호</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                    </S.Select>
                </S.SelectCover>
                <S.InputTitle>전화번호</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="전화번호를 입력하세요." {...register("phone",{required:"전화번호를 작성하여 주세요"})} style={errors.phone?.message ? { borderColor: "#FF3E3E" } : {borderColor:"#9B9B9B"}} $placeholderColor={errors.phone?.message ? "#FF3E3E":undefined}/>
                <S.ErrorMessage>{errors.phone?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
            </S.InputCover>
            <S.ButtonCover>
            <S.Button type="submit">다음으로</S.Button>
            <S.Button $bgColor="#747474" onClick={()=>navigate(-1)} type="button">뒤로가기</S.Button>
            </S.ButtonCover>
            </form>
}

export default Member2;