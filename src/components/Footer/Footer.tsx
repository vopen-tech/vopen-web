import React from "react";
import { SocialIcon } from "../../components";

import styles from "./Footer.module.scss";

export default class Footer extends React.PureComponent<any, any> {
  render() {
    const { children } = this.props;

    return (
      <footer className={styles.footer}>
        <SocialIcon type="twitter" url="https://twitter.com/vopentech" />
        <SocialIcon type="linkedin" url="https://linkedin.com/vopentech" />
        <SocialIcon type="facebook" url="https://facebook.com/vopentech" />
        <SocialIcon type="instagram" url="https://instagram.com/vopentech" />
        <SocialIcon type="youtube" url="https://youtube.com/vopentech" />
        <div className={styles.separator} />
        {children}
      </footer>
    );
  }
}
