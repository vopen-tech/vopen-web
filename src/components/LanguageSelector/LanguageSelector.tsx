import React from "react";
import classNames from "classnames";
import { siteService } from "../../services";
import { IProps, IState } from "./types";

import styles from "./LanguageSelector.module.scss";

export default class LanguageSelector extends React.PureComponent<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    languages: [
      { label: "ES", value: "es" },
      { label: "EN", value: "en" }
    ]
  };

  state = {
    activeLanguageAndRegion: siteService.getSiteLanguageAndRegion()
  };

  handleActiveLanguageChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const { activeLanguageAndRegion } = this.state;
    let newActiveLanguage = e.currentTarget.dataset["language"] as string;

    if (activeLanguageAndRegion.startsWith(newActiveLanguage)) {
      return;
    }

    // Update the site language
    siteService.setSiteLanguage(newActiveLanguage);

    const newActiveLanguageAndRegion = siteService.getSiteLanguageAndRegion();
    this.setState({ activeLanguageAndRegion: newActiveLanguageAndRegion });

    // Reload the page
    window.location.reload();
  };

  render() {
    const { languages } = this.props;
    const { activeLanguageAndRegion } = this.state;

    return (
      <div className={styles.languageSelector}>
        {languages.map(item => (
          <div
            key={item.value}
            className={classNames(styles.language, activeLanguageAndRegion.startsWith(item.value) && styles.active)}
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
