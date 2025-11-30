import * as S from "./AddPost.style"
import Editor from "@/components/AddPost/Editor";
import Button from "@/components/Buttons/Button";
import { useForm, Controller, type SubmitHandler, type ControllerFieldState, type ControllerRenderProps } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TurndownService from "turndown";

export interface IFormInput {
  title: string,
  subTitle: string,
  category: Record<string, string>,
  content: string,
  author: string,
}

interface IController {
  field: ControllerRenderProps<IFormInput, "content">;
  fieldState: ControllerFieldState;
}

function AddPost({ onSubmit, author, value="", category }: { onSubmit: SubmitHandler<IFormInput>, author?: boolean, value?: string, category: Record<string, string> }) {
  const navigator = useNavigate();

  const { control, register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      title: "",
      subTitle: "",
      content: value,
      author: ""
    }
  });

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.Title placeholder="제목을 입력하세요." {...register("title")} />
      <S.SubTitle placeholder="부제목을 입력하세요." {...register("subTitle")} />
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
                <Editor value={field.value} setValue={field.onChange} />
                {fieldState.error && (
                  <p>{fieldState.error?.message}</p>
                )}
              </>)
          }
        } />

    const handleConvertMarkdown:SubmitHandler<IFormInput> = (data) => {
        const turndown = new TurndownService();
        const converted = turndown.turndown(data.content);

        const submitData = {
            ...data,
            content: converted
        };

        onSubmit(submitData)
    }
    
    return (
        <S.Container onSubmit={handleSubmit(handleConvertMarkdown)}>
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