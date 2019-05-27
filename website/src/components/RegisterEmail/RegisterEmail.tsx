import React from "react";
import classNames from "classnames";
import { ArrowRight } from "../SVGs";
import { Props, State } from "./types";
import styles from "./RegisterEmail.module.scss";

export default class RegisterEmail extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { email: undefined };
  }

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;
    this.setState({ email });
  };

  handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { email } = this.state;

    if (email) {
      console.log("email sent", email);
    }
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(styles.registerEmail, className);

    return (
      <div className={cssClasses}>
        <h3 className={styles.title}>Quiero recibir novedades</h3>
        <div className={styles.section}>
          <input className={styles.input} type="email" placeholder="you@email.com" onChange={this.handleEmailChange} />
          <button className={styles.button} onClick={this.handleButtonClick}>
            <ArrowRight className={styles.arrowRight} />
          </button>
        </div>
      </div>
    );
  }
}
