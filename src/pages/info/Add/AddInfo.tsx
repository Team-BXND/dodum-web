import axios from 'axios';
import Editor from '@/components/AddPost/Editor';
import Button from '@/components/Buttons/Button';
import {
  useForm,
  Controller,
  type SubmitHandler,
  type ControllerFieldState,
  type ControllerRenderProps,
} from 'react-hook-form';
import * as S from '@/components/AddPost/AddPost.style';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
  const navigator = useNavigate();

  return (
    <S.ButtonContainer>
      <Button text="게시" type="submit" />
      <Button
        text="취소"
        onClick={() => {
          navigator(-1);
        }}
        isGray
      />
    </S.ButtonContainer>
  );
};

export interface IFormInput {
  title: String;
  subTitle: string;
  content: string;
  author: string;
}

interface IController {
  field: ControllerRenderProps<IFormInput, 'content'>;
  fieldState: ControllerFieldState;
}
function AddInfo({ onSubmit }: { onSubmit: SubmitHandler<IFormInput> }) {
  const { control, register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      title: '',
      subTitle: '',
      content: '',
      author: '',
    },
  });
  return (
    <S.Container as="form" onSubmit={handleSubmit(onSubmit)}>
      <S.Title placeholder="제목을 입력하세요." {...register('title')} />
      <S.SubTitle
        placeholder="부제목을 입력하세요."
        {...register('subTitle')}
      />
      <S.TagsContainer>
        <S.Author placeholder="작성자를 입력하세요." {...register('author')} />
      </S.TagsContainer>

      <Controller
        name="content"
        control={control}
        render={({ field, fieldState }: IController) => {
          return (
            <>
              <Editor value={field.value} setValue={field.onChange} />
              {fieldState.error && <p>{fieldState.error?.message}</p>}
            </>
          );
        }}
      />

      <Buttons />
    </S.Container>
  );
}
export default AddInfo;
