export interface IProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  className?: string;
  type?: "odd" | "even" | "full" | "primary";
}

export interface IState {}
