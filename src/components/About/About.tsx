import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./About.module.scss";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const { className } = this.props;
    const cssClasses = classNames(styles.about, className);

    return (
      <div className={cssClasses}>
        <div className={styles.image} />
        <p className={styles.textSection}>
          ¡Bienvenid@s a vOpen! El grupo de eventos de tecnología más importante en Latinoamérica.
          <br /> <br />
          Nuestra misión es conectar a entusiastas, estudiantes, profesionales, expertos referentes y organizaciones de todo el mundo que utilicen la tecnología
          para concretar sus objetivos.
          <br /> <br />
          Nuestra historia comenzó como{" "}
          <a href="http://netconf.global" target="_blank">
            .NET Conf
          </a>
          , y durante los últimos 5 años convocamos a 221 expertos, 148 sponsors, +50 organizadores y +5000 asistentes en el marco de las 10 ediciones que
          llevamos adelante en 4 países.
          <br /> <br />
          Hoy somos <b>vOpen</b> y en el 2019 hemos expandido nuestro alcance para mostrarte cómo la innovación y la tecnología está transformando nuestra vida.{" "}
          <b>¡Sumate!</b>
        </p>
      </div>
    );
  }
}
