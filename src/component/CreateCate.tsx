import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { cateListState, cateState } from "../atoms";

const Form = styled.form`
  margin-bottom: 15px;
  input {
    height: 30;
    border-radius: 10px;
    margin-right: 5px;
    padding: 7px;
  }
  button {
    border: none;
    border-radius: 10px;
    padding: 7px;
    background-color: ${(props) => props.theme.accentColor};
  }
`;

interface IForm {
  cate: string;
}

function CreateCate() {
  const setCateList = useSetRecoilState(cateListState);
  const setCate = useSetRecoilState(cateState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onCreate = ({ cate }: IForm) => {
    setCateList((oldVal) => {
      return {
        ...oldVal,
        [cate]: [],
      };
    });
    setValue("cate", "");
  };
  return (
    <Form onSubmit={handleSubmit(onCreate)}>
      <input
        {...register("cate", { required: "please write Category" })}
        type="text"
        placeholder="create category"
      />
      <button>create</button>
    </Form>
  );
}

export default CreateCate;
