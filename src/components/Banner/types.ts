export interface IProps {
  title: string;
  subtitle: string;
  to: string;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
  type?: "odd" | "even";
}

export interface IState {}
