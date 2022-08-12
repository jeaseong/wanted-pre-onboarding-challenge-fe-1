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

export interface DetailType {
  id: string | undefined;
  handleDeleteTodo: (id: string) => void;
  handleUpdateTodo: (id: string, todo: Todos) => void;
}

export interface AddType {
  handleAddTodo: (todo: Todos) => void;
}

export interface EditType {
  todo: Todos;
  handleUpdateTodo: (id: string, todo: Todos) => void;
  handleOnEditForm: () => void;
}
