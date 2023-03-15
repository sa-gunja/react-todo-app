import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  Categories,
  cateState,
  toDoState,
  toDoSelector,
  IToDo,
  cateListState,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import styled from "styled-components";
import ToDo from "./ToDo";
import CreateCate from "./CreateCate";

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

function ToDoList() {
  const cateList = useRecoilValue(cateListState);
  const toDos = useRecoilValue(toDoSelector);
  const setCategory = useSetRecoilState(cateState);
  const [allToDos, setAllToDos] = useRecoilState<IToDo[]>(toDoState);

  const onSelected = (event: React.FormEvent<HTMLSelectElement>) => {
    // setCategory(event.currentTarget.value as any);
    console.log(event.currentTarget.value);
    let selectName = event.currentTarget.value;
    setCategory(selectName);
  };

  return (
    <Container>
      <H1>To Dos</H1>
      <Hr />
      <CreateCate />
      <Div>
        <Select onInput={onSelected}>
          <option>none</option>
          {Object.keys(cateList).map((key, index) => (
            <option key={index} value={key}>
              {key}
            </option>
          ))}
          {/* <option value={Categories.TO_DO}>TO_DO</option>
          <option value={Categories.DOING}>DOING</option>
          <option value={Categories.DONE}>DONE</option> */}
        </Select>
        <CreateToDo />
      </Div>
      <Ul>
        {toDos?.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </Ul>
    </Container>
  );
}

export default ToDoList;
