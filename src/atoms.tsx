import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Categories {
  "DELETE" = "DELETE",
}
export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export interface ICateList {
  [key: string]: [];
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cateState = atom({
  key: "category",
  default: {},
});

export const cateListState = atom<ICateList[]>({
  key: "cateList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(cateState);
    return toDos.filter((todo) => todo.category === category);
  },
});
