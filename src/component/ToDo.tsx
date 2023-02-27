import { Categories, IToDo, toDoSelector, toDoState } from "../atoms";
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
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      console.log(oldToDos);
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);

      if (name === Categories.DELETE) {
        const newArr = [...oldToDos];
        newArr.splice(targetIndex, 1);
        return newArr;
      } else {
        const newToDo = { text, id, category: name as any };

        return [
          ...oldToDos.slice(0, targetIndex),
          newToDo,
          ...oldToDos.slice(targetIndex + 1),
        ];
      }
    });
  };

  return (
    <Li>
      <span>{text}</span>
      <div>
        {category !== Categories.TO_DO && (
          <Btn name={Categories.TO_DO} onClick={onClick}>
            ToDo
          </Btn>
        )}
        {category !== Categories.DOING && (
          <Btn name={Categories.DOING} onClick={onClick}>
            Doing
          </Btn>
        )}
        {category !== Categories.DONE && (
          <Btn name={Categories.DONE} onClick={onClick}>
            Done
          </Btn>
        )}
        {
          <Btn name={Categories.DELETE} onClick={onClick}>
            Delete
          </Btn>
        }
      </div>
    </Li>
  );
}

export default ToDo;
