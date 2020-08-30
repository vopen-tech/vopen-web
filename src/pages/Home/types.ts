import { IEdition } from "../../types/IEdition";

export type IProps = {
    conferenceInfo: IEdition,
    session: any | null,
    showError: boolean,
    dispatch: Function,
    addToast: Function
}