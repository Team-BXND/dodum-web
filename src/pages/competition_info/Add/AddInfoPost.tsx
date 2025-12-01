import * as S from "@/components/AddPost/AddPost.style"
import Editor from "@/components/AddPost/Editor";
import Button from "@/components/Button/Button.tsx";
import { useForm, Controller, type SubmitHandler, type ControllerFieldState, type ControllerRenderProps } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
    const navigator = useNavigate();

    return (
        <S.ButtonContainer>
            <Button text="게시" type="submit"/>
            <Button text="취소" onClick={() => {navigator(-1)}} isGray/>
        </S.ButtonContainer>
    )
}


export interface IFormInput {
    title: string;
  subtitle: string;
  content: string;
  phone: string;
  email: string;
  time: string;   
  place: string;
  image: string;
}

interface IController {
    field: ControllerRenderProps<IFormInput, "content">;
    fieldState: ControllerFieldState;
}

function AddInfoPost({onSubmit}: {onSubmit: SubmitHandler<IFormInput>}) {
    const { control, register, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            title: "",
            subtitle: "",
            content: "",
            phone:"",
            email:"",
            time:""

        }
    });

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title placeholder="제목을 입력하세요." {...register("title")}/>
            <S.SubTitle placeholder="부제목을 입력하세요." {...register("subtitle")}/>
            <S.SubTitle placeholder="장소를 입력하세요." {...register("place")}/>
            <S.SubTitle placeholder="전화번호를 입력하세요." {...register("phone")}/>
            <S.SubTitle placeholder="이메일을 입력하세요." {...register("email")}/>
            <S.SubTitle placeholder="시간을 입력하세요." {...register("time")}/>
            <S.TagsContainer>
            </S.TagsContainer>
            <Controller 
                name="content"
                control={control}
                render={
                    ({ field, fieldState }:IController) => {
                        return (
                        <>
                            <Editor value={field.value} setValue={field.onChange} thumbnail={() => null}/>
                            {fieldState.error && (
                                <p>{fieldState.error?.message}</p>
                            )}
                        </>)
                    }
                } />
                
            <Buttons/>
        </S.Container>
    )
}


export default AddInfoPost;