import { ILanguage } from "../../types/ILanguage";

export interface IProps {
  languages: ILanguage[];
}

export interface IState {
  activeLanguage: string;
}
