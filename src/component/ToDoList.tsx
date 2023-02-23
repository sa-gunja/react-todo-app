import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
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

function ToDoList() {
  const [To_Do, DOING, DONE] = useRecoilValue(toDoSelector);
  const onSelected = (event: React.FocusEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <Container>
      <H1>To Dos</H1>
      <Hr />
      <select onInput={onSelected}>
        <option value="To_Do">TO_DO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateToDo />
    </Container>
  );
}

export default ToDoList;
