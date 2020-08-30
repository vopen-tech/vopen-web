export interface IProps {
  deadline: Date,
  current: Date,
  register: Function
}

export interface IState {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}
