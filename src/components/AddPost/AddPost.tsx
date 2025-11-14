import * as S from "./AddPost.style"
import Editor from "@/components/AddPost/Editor";
import Button from "@/components/Buttons/Button";
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

export const Category = {
    club: "동아리",
    narsha: "나르샤",
    awards: "대회 수상작",
    mini_project: "미니 프로젝트"
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export interface IFormInput {
    title: string,
    subTitle: string,
    category: Category,
    content: string,
    author: string,
}

interface IController {
    field: ControllerRenderProps<IFormInput, "content">;
    fieldState: ControllerFieldState;
}

function AddPost({onSubmit}: {onSubmit: SubmitHandler<IFormInput>}) {
    const { control, register, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            title: "",
            subTitle: "",
            content: "",
            author: ""
        }
    });

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title placeholder="제목을 입력하세요." {...register("title")}/>
            <S.SubTitle placeholder="부제목을 입력하세요." {...register("subTitle")}/>
            <S.TagsContainer>
                <S.Author placeholder="작성자를 입력하세요." {...register("author")}/>
                <S.Category defaultValue="" {...register("category")} required>
                    <option disabled hidden value="">카테고리를 선택하세요.</option>
                    {Object.values(Category).map((value) => {
                        return (
                            <option key={value} value={value}>{value}</option>
                        )
                    })}
                </S.Category>
            </S.TagsContainer>
            <Controller 
                name="content"
                control={control}
                render={
                    ({ field, fieldState }:IController) => {
                        return (
                        <>
                            <Editor value={field.value} setValue={field.onChange}/>
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


export default AddPost;