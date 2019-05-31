import React from "react";
import classNames from "classnames";
import Edition from "./Edition";

import { Props, State } from "./types";
import styles from "./PastEditions.module.scss";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(styles.pastEditions, className);

    return (
      <div className={cssClasses}>
        <div className={styles.editions}>
          <Edition
            className={styles.edition}
            date="4 de Octubre de 2018"
            location="Buenos Aires, Argentina"
            imageUrl="https://vopenprodstorage.blob.core.windows.net/publicresources/AR0.jpg"
            url="http://ar.netconf.global"
          />
          <Edition
            className={styles.edition}
            date="8 de Noviembre de 2018"
            location="Medellín, Colombia"
            imageUrl="https://vopenprodstorage.blob.core.windows.net/publicresources/CO0.jpg"
            url="http://co.netconf.global"
          />
          <Edition
            className={styles.edition}
            date="15 de Noviembre de 2018"
            location="Montevideo, Uruguay"
            imageUrl="https://vopenprodstorage.blob.core.windows.net/publicresources/UY0.jpg"
            url="https://uy.netconf.global"
          />
          <Edition
            className={styles.edition}
            date="28 de Noviembre de 2018"
            location="Santiago, Chile"
            imageUrl="https://vopenprodstorage.blob.core.windows.net/publicresources/CL0.jpg"
            url="https://cl.netconf.global"
          />
        </div>
      </div>
    );
  }
}
