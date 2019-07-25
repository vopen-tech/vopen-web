import React from "react";
import classNames from "classnames";
import { siteService } from "../../services";
import { IProps, IState } from "./types";

import styles from "./LanguageSelector.module.scss";

export default class LanguageSelector extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    languages: [{ label: "ES", value: "es-AR" }, { label: "EN", value: "en-US" }]
  };

  state = {
    activeLanguage: siteService.getSiteLanguage()
  };

  handleActiveLanguageChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const { activeLanguage } = this.state;
    const newActiveLanguage = e.currentTarget.dataset["language"] as string;

    if (activeLanguage === newActiveLanguage) {
      return;
    }

    this.setState({ activeLanguage: newActiveLanguage });
    siteService.setSiteLanguage(newActiveLanguage);
  };

  render() {
    const { languages } = this.props;
    const { activeLanguage } = this.state;

    return (
      <div className={styles.languageSelector}>
        {languages.map(item => (
          <div
            key={item.value}
            className={classNames(styles.language, activeLanguage === item.value && styles.active)}
            data-language={item.value}
            onClick={this.handleActiveLanguageChange}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }
}
