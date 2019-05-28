import React from "react";
import classNames from "classnames";
import { Props, State } from "./types";
import styles from "./About.module.scss";
import BackgroundTriangle from "../BackgroundTriangle";

export default class About extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    id: "about",
    className: undefined
  };

  render() {
    const { id, className } = this.props;
    const cssClasses = classNames(className, styles.about);

    return (
      <div id={id} className={cssClasses}>
        <BackgroundTriangle />
        <div className={styles.image} />
        <div className={styles.textSection}>
          <h3 className={styles.title}>About</h3>
          <p className={styles.text}>
            Desde 2014 somos uno de los eventos más importantes de tecnologías en Latinoamérica.
            <br />
            Con nosotros aprenderás sobre lo último en desarrollo de software junto a speakers internacionales, conocerás las múltiples comunidades de
            tecnología y te divertirás en un ambiente descontracturado. vOpen es un evento sin fines de lucro hecho por la comunidad y para la comunidad. <br />{" "}
            <br />
            Nuestra historia comenzó como <b>.NET Conf</b>, hoy somos <b>vOpen</b>. Aquí hablamos de todas las tecnologías que nos importan a nosotros, los
            desarrolladores de software. Trabajamos con una gran diversidad de tecnologías en el día a día. Necesitamos saber hacia dónde van las tendencias y
            cómo podemos emplear mejor la tecnología para solucionar los problemas de mañana.
            <br /> <br />
            Bienvenidos a vOpen!
          </p>
        </div>
      </div>
    );
  }
}
