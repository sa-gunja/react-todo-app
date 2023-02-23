import { IToDo, toDoSelector, toDoState } from "../atoms";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Li = styled.li`
  padding: 10px 0;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button`
  margin-left: 3px;
`;

function ToDo({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const output = useRecoilValue(toDoSelector);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: name as any };

      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };

  console.log(output);
  return (
    <Li>
      <span>{text}</span>
      <div>
        {category !== "TO_DO" && (
          <Btn name="TO_DO" onClick={onClick}>
            ToDo
          </Btn>
        )}
        {category !== "DOING" && (
          <Btn name="DOING" onClick={onClick}>
            Doing
          </Btn>
        )}
        {category !== "DONE" && (
          <Btn name="DONE" onClick={onClick}>
            Done
          </Btn>
        )}
      </div>
    </Li>
  );
}

export default ToDo;
