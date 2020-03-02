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
          <div className={styles.countries}>
            <a className="link navy ph3 db-" href="//ar.vopen.tech" target="_blank">
              Argentina
            </a>
            <a className="link navy ph3 db" href="//cl.vopen.tech" target="_blank">
              Chile
            </a>
            <a className="link navy ph3 db" href="//mx.vopen.tech" target="_blank">
              México
            </a>
            <a className="link navy ph3 db" href="//uy.vopen.tech" target="_blank">
              Uruguay
            </a>
          </div>
        </div>
        <div className="flex">
          <SocialIcon iconType="Twitter" url="https://twitter.com/vopentech"/>
          <SocialIcon iconType="Linkedin" url="https://linkedin.com/company/vopentech"/>
          <SocialIcon iconType="Facebook" url="https://facebook.com/vopentech" />
          <SocialIcon iconType="Instagram" url="https://instagram.com/vopentech"  />
          <SocialIcon iconType="Youtube" url="https://youtube.com/vopentech"  />
        </div>
      </footer>
    );
  }
}
