import React from "react";
import styles from "./BlogPage.module.scss";
import { resourcesService } from "../../services";

export default class BlogPage extends React.PureComponent {
  render() {
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.conductPage}>
        <h3 className={styles.title}>{Resources.pages.blog}</h3>
        <p className={styles.text}>
          el blog
        </p>
      </div>
    );
  }
}
