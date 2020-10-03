import { INotification } from "../../types/INotification";

export type IProps = {
    notifications: INotification[],
    dispatch: Function,
}