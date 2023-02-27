import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cateState, toDoState } from "../atoms";
import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
`;

const Btn = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.accentColor};
  margin-left: 5px;
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const category = useRecoilValue(cateState);
  const handleValid = ({ toDo }: IForm ) => {
    setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: category as any }, ...oldToDos]);
    setValue("toDo", "");
    
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Input {...register("toDo", { required: "Please write a To Do" })} placeholder="write to do" />
      <Btn>Add</Btn>
    </form>
  );
}

export default CreateToDo;
