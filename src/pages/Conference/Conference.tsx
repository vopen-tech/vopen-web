import React from "react";
import { CountDown } from "../../components";

export default class Conference extends React.PureComponent {
  render() {
    return (
      <>
        <CountDown deadline={new Date(2020, 9, 3, 9, 0, 0)} current={new Date()} />
      </>
    );
  }
}
