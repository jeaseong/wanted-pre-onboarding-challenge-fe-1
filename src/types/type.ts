export interface InputTypes {
  type: "text" | "password";
  types: "auth" | "todo";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
}

export interface AreaTypes {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  value?: string;
}

export interface RouteType {
  component: JSX.Element;
  isToken?: boolean;
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
