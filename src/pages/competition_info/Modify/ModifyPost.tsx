import * as S from "@/components/AddPost/AddPost.style"
import Editor from "@/components/AddPost/Editor";
import Button from "@/components/Button/Button.tsx";
import { useForm, Controller, type SubmitHandler, type ControllerFieldState, type ControllerRenderProps, } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
const VITE_SERVER_URL= import.meta.env.VITE_SERVER_URL.toString();
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

interface ModifyPostProps {
    onSubmit: SubmitHandler<IFormInput>;
    setId: (id: number) => void;
}

function ModifyPost({ onSubmit, setId }: ModifyPostProps) {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<Partial<IFormInput> | null>(null);
    const [thumbnail, setThumbnail] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
          setId(Number(id));
        }
      }, [id]);

    useEffect(() => {
        axios.get(`${VITE_SERVER_URL}/contest/${id}`, {
            params: {
                page: 1,
            },
        }).then((response) => {
            setData(response.data.data);
        });
    }, []);

    const { control, register, handleSubmit,reset} = useForm<IFormInput>({
        defaultValues: {
            title: `${data?.title || ""}`,
            subtitle: `${data?.subtitle || ""}`,
            content: `${data?.content || ""}`,
            phone: `${data?.phone || ""}`,
            email: `${data?.email || ""}`,
            time: `${data?.time || ""}`,
        },
    });

    useEffect(() => {
        if (data) {
          reset(data);
        }
      }, [data]);

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title placeholder="제목을 입력하세요." {...register("title")} />
            <S.SubTitle placeholder="부제목을 입력하세요." {...register("subtitle")} />
            <S.SubTitle placeholder="장소를 입력하세요." {...register("place")} />
            <S.SubTitle placeholder="전화번호를 입력하세요." {...register("phone")} />
            <S.SubTitle placeholder="이메일을 입력하세요." {...register("email")} />
            <S.SubTitle placeholder="시간을 입력하세요." {...register("time")} />
            <S.TagsContainer>
            </S.TagsContainer>
            <Controller
                name="content"
                control={control}
                render={({ field, fieldState }: IController) => {
                    return (
                        <>
                            <Editor value={field.value} setValue={field.onChange} thumbnail={setThumbnail} />
                            {fieldState.error && (
                                <p>{fieldState.error?.message}</p>
                            )}
                        </>
                    );
                }}
            />
            <Buttons />
        </S.Container>
    );
}


export default ModifyPost;