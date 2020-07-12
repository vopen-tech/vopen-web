export interface IProps {
  deadline: Date,
  current: Date,
  getTranslation: Function
}

export interface IState {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}
