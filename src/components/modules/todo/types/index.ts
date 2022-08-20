export interface todoType {
  title: string;
  content: string;
}

export interface Todos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
export interface TodosType {
  todos: Todos[];
}

export type ParamsId = string | undefined;
