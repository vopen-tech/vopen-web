import React from "react";
import { SocialIcon, VOpenIso } from "../../components";

import styles from "./Footer.module.scss";

export default class Footer extends React.PureComponent<any, any> {
  render() {
    const { children } = this.props;

    return (
      <footer className={styles.footer}>
        <div className="flex items-center">
          <VOpenIso className={styles.logo} to="/" />
        </div>
        <div className="flex">
          <SocialIcon iconType="Twitter" url="https://twitter.com/vopentech" />
          <SocialIcon iconType="Linkedin" url="https://linkedin.com/company/vopentech" />
          <SocialIcon iconType="Facebook" url="https://facebook.com/vopentech" />
          <SocialIcon iconType="Instagram" url="https://instagram.com/vopentech" />
          <SocialIcon iconType="Youtube" url="https://youtube.com/vopentech" />
        </div>
      </footer>
    );
  }
}
