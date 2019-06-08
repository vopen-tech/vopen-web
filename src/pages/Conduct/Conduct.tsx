import React from "react";
import styles from "./Conduct.module.scss";

export default class Conduct extends React.PureComponent {
  render() {
    return (
      <div className={styles.conduct}>
        <h3 className={styles.title}>Código de conducta</h3>
        <p className={styles.text}>
          El acoso incluye y no se limita a comentarios ofensivos verbales relacionadas al género, identidad y/o expresión de género, orientación sexual,
          discapacidad, apariencia física, el tamaño corporal, la raza, la religión, las imágenes sexuales en espacios públicos, intimidación deliberada, el
          acecho, persecución, acoso fotográfico o de grabación, interrupciones constantes de las charlas u otros eventos, contacto físico inapropiado, atención
          sexual no deseada.
          <br /> <br />
          vOpen está abocada a proporcionar una experiencia libre de acoso para todas las personas independientemente de su sexo, identidad y/o expresión de
          género, orientación sexual, discapacidad, apariencia física, el tamaño corporal, raza o religión. No se tolera el acoso a los participantes de la
          conferencia en cualquier forma.
          <br /> <br />
          Todos los asistentes, speakers, sponsors, voluntarios y organizadores deberán guiar su actuar en base al Código de Conducta, tanto en la conferencia
          como en los talleres y los eventos sociales del evento. Los organizadores harán cumplir este código durante toda la duración de la conferencia,
          tomando cualquier acción que les parezca apropiada y a discreción de la organización, incluyendo una advertencia o expulsión de la conferencia sin
          reembolso. Los miembros del staff podrán ser identificados por sus acreditaciones y/o vestimenta específica.
          <br /> <br />
          Si estás siendo sujeto de acoso o discriminación - o sos testigo de estos comportamientos - por favor contactate de inmediato con un miembro del
          equipo organizador. El personal de la conferencia se pondrá en contacto con la seguridad del lugar o la policía local, proveerá escoltas en caso de
          ser necesario o, en todo caso, asistirá a aquellos que sufren de acoso de sentirse seguros durante toda la duración de la conferencia.
        </p>
      </div>
    );
  }
}
