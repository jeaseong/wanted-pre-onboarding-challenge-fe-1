export interface InputTypes {
  type: "text" | "password";
  types: "auth" | "todo";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export interface RouteType {
  component: JSX.Element;
}
