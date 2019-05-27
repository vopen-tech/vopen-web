import React from "react";
import classNames from "classnames";

import Edition from "./Edition";
import BackgroundTriangle from "../BackgroundTriangle";

import { Props, State } from "./types";
import styles from "./PastEditions.module.scss";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(className, styles.pastEditions);

    return (
      <div className={cssClasses}>
        <BackgroundTriangle isOdd={true} />
        <div className={styles.header}>
          <h3 className={styles.title}>Ediciones anteriores</h3>
        </div>
        <div className={styles.editions}>
          <Edition
            className={styles.edition}
            date="4 de Octubre"
            location="Buenos Aires, Argentina"
            imageUrl="http://ar.netconf.global/Content/images/country/AR/2018/main-slider/2.jpg"
            url="http://ar.netconf.global"
          />
          <Edition
            className={styles.edition}
            date="8 de Noviembre de 2018"
            location="Medellín, Colombia"
            imageUrl="http://co.netconf.global/Content/images/country/CO/2018/main-slider/1.jpg"
            url="http://co.netconf.global"
          />
          <Edition
            className={styles.edition}
            date="15 de Noviembre"
            location="Montevideo, Uruguay"
            imageUrl="https://imgur.com/tC9EAps.jpg"
            url="https://uy.netconf.global"
          />
          <Edition
            className={styles.edition}
            date="28 de Noviembre"
            location="Santiago, Chile"
            imageUrl="https://imgur.com/aIBPT7J.jpg"
            url="https://cl.netconf.global"
          />
        </div>
      </div>
    );
  }
}
