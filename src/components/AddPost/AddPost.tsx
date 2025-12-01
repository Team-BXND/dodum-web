import * as S from "./AddPost.style"
import Editor from "@/components/AddPost/Editor";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import { useForm, Controller, type SubmitHandler, type ControllerFieldState, type ControllerRenderProps } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TurndownService from "turndown";

const Buttons = () => {
  const navigator = useNavigate();
  return (
    <S.ButtonContainer>
      <Button text="게시" type="submit" />
      <Button text="취소" onClick={() => { navigator(-1) }} isGray />
    </S.ButtonContainer>
  )
}

export interface IFormInput {
  title: string,
  subTitle: string,
  category: string,
  content: string,
  author: string,
  thumbnail: string | null,
}

interface IController {
  field: ControllerRenderProps<IFormInput, "content">;
  fieldState: ControllerFieldState;
}

interface AddPostProps {
  onSubmit: SubmitHandler<IFormInput>;
  author?: boolean;
  value?: string;
  category: Record<string, string>;
  subtitle?: boolean;
}

function AddPost({ onSubmit, author, value = "", category, subtitle }: AddPostProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const { control, register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      title: "",
      subTitle: "",
      content: value,
      author: ""
    }
  });

  const handleConvertMarkdown: SubmitHandler<IFormInput> = (data) => {
    const turndown = new TurndownService();
    const converted = turndown.turndown(data.content);

    const submitData = {
      ...data,
      content: converted,
      thumbnail: thumbnail
    };

    onSubmit(submitData)
  }

  return (
    <S.Container onSubmit={handleSubmit(handleConvertMarkdown)}>
      <S.Title placeholder="제목을 입력하세요." {...register("title")} />
      {subtitle ? <S.SubTitle placeholder="부제목을 입력하세요." {...register("subTitle")} /> : null}
      <S.TagsContainer>
        {author ? <S.Author placeholder="작성자를 입력하세요." {...register("author")} /> : null}
        <S.Category defaultValue="" {...register("category")} required>
          <option disabled hidden value="">카테고리를 선택하세요.</option>
          {Object.values(category).map((value) => {
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
          ({ field, fieldState }: IController) => {
            return (
              <>
                <Editor thumbnail={setThumbnail} value={field.value} setValue={field.onChange} />
                {fieldState.error && (
                  <p>{fieldState.error?.message}</p>
                )}
              </>)
          }
        } />
    </S.Container>

      <Buttons />
    </S.Container>
  )
}


export default AddPost;