import * as S from "@/pages/Login/Login.style.ts"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import { api } from "./api.ts";
import { useSignupStore } from "./SignupStore";


const Member2=() => {
    // 여러 요소 정의
    const {username,email,grade,class_no,phone,setSignup}=useSignupStore();
    const [studentinfo,setStudentinfo]=useState({
        grade:"",
        classNo:"",
        studentNo:"",
});
    const { register, handleSubmit, formState: { errors },setError,watch } = useForm();
    const navigate=useNavigate();
    
    // 학생 데이터 정의
    const student_grade=["1","2","3"];
    const student_class=["1","2","3","4"];
    const student_no=Array.from({length:18},(_,i)=>(i+1).toString());

    // 학생 정보를 저장하는 핸들러
    const handleStudentChange=(
        key:"grade" | "classNo" | "studentNo",
        value:string
    )=>{
        setStudentinfo((prev)=>({
            ...prev,
            [key]:value,
        }));
    }


    // 핸들러 정의(이메일 인증 번호 발생 및 체크)
    const onValid=(data:any)=>{
        setSignup({
            username:watch("username"),
            email:watch("email"),
            grade:parseInt(studentinfo.grade, 10),
            class_no:parseInt(studentinfo.classNo, 10),
            student_no:parseInt(studentinfo.studentNo, 10),
            phone:watch("phone")})

            // 이메일 인증번호 발송 요청
            api.post("/auth/email/send",{ email:watch("email"),
            }).then((response)=>{
                if(response.data.data){
                navigate("/member/certification",{state:{email:watch("email")}});
                }
                else{
                    setError("email",{message:"이메일 인증번호 발송에 실패했습니다. 다시 시도해주세요."})
                }
            })
    }

    return<form onSubmit={handleSubmit(onValid)}>
            <S.InputCover>
                <S.InputTitle>이메일 주소</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="이메일 주소를 입력해주세요." {...register("email",{required:"이메일 주소를 작성하여 주세요"})} $hasError={errors.email ? true : false}/>
                <S.ErrorMessage>{errors.email?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
                <S.InputTitle>학번</S.InputTitle>

                <S.SelectCover>
                    <S.Select onChange={(event)=>handleStudentChange("grade",event.target.value)}>
                        <option value="">학년</option>
                        {student_grade.map((grade)=><option key={grade}>{grade}</option>)}
                    </S.Select>
                    <S.Select onChange={(event)=>handleStudentChange("classNo",event.target.value)}>
                        <option value="">반</option>
                        {student_class.map((class_no)=><option key={class_no}>{class_no}</option>)}
                    </S.Select>
                    <S.Select onChange={(event)=>handleStudentChange("studentNo",event.target.value)}>
                        <option value="">번호</option>
                        {student_no.map((student_no)=><option key={student_no}>{student_no}</option>)}
                    </S.Select>
                </S.SelectCover>

                <S.InputTitle>전화번호</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="전화번호를 입력하세요." {...register("phone",{required:"전화번호를 작성하여 주세요"})}  $hasError={errors.email ? true : false}/>
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