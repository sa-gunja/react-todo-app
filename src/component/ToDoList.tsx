import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  Categories,
  cateState,
  toDoState,
  toDoSelector,
  IToDo,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import styled from "styled-components";
import ToDo from "./ToDo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  background-color: ${(props) => props.theme.accentColor};
  width: 300px;
  border-radius: 10px;
  text-align: center;
  margin-top: 30px;
  padding: 10px 0px;
`;

const Hr = styled.hr`
  width: 100vw;
  margin: 15px 0;
`;

const Ul = styled.ul`
  margin-top: 30px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  width: 300px;
  height: auto;
  padding: 20px;
  border-radius: 10px;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Select = styled.select`
  border-radius: 10px;
  margin-right: 5px;
  height: 30px;
`;

const SaveBtn = styled.button`
  width: 250;
  height: 60px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accentColor};
  font-size: 25px;
  margin-top: 10px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const setCategory = useSetRecoilState(cateState);
  const [allToDos, setAllToDos] = useRecoilState<IToDo[]>(toDoState);

  useEffect(() => {
    // const localData = localStorage.getItem("toDos");
    // if (localData) {
    //   setAllToDos(JSON.parse(localData));
    // }
  }, []);

  const onSelected = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const onSave = () => {
    // localStorage.setItem("toDos", JSON.stringify(allToDos));
    // const save = localStorage.getItem("toDos") ? true : false;
    // if (save) alert("저장되었습니다");
    // else alert("저장 실패");
  };

  return (
    <Container>
      <H1>To Dos</H1>
      <Hr />
      <Div>
        <Select onInput={onSelected}>
          <option value={Categories.TO_DO}>TO_DO</option>
          <option value={Categories.DOING}>DOING</option>
          <option value={Categories.DONE}>DONE</option>
        </Select>
        <CreateToDo />
      </Div>
      <Ul>
        {toDos?.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </Ul>
      <SaveBtn onClick={onSave}>Save</SaveBtn>
    </Container>
  );
}

export default ToDoList;
