import { IUser } from "../../types/IUser";

export interface Props {
  speakers: IUser[];
  className?: string;
  title?: string;
  type?: "odd" | "even";
}

export interface State {}
