
import React from "react";
import { resourcesService } from "../../services";
import { Props, State } from "./types";
import styles from "./Slider.module.scss";
import { ActionButton } from "../../components";
import constants from "../../constants";
import { FlagArgentina, FlagChile, FlagMexico, FlagUruguay } from "../../components/SVGs";

export default class Slider extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    className: undefined
  };

  render() {
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.slider}>
          <h2 className="ttu">{Resources.titles.nextConf}</h2>

          {/* inicio del slider */}
        <div className="flex flex-wrap items-end nt5">
            <div className="w-40-l w-100">
                <div className={styles.dataSlider}>
                    <h3>vOpen MX 2020 </h3>
                    <p>Tecnológico Nacional de México Campus Tlahuac</p>
                    <p className={styles.timeSlider}>26, 27 Y 28 DE MARZO</p>
                    <p className={styles.urlSlider}><a href="https://mx.vopen.tech" target="_blank" rel="noopener">{Resources.buttons.visit} mx.vopen.tech</a></p>
                    <div className={styles.flags}>
                      <FlagMexico className={styles.flag} onClick={() => window.open("//mx.vopen.tech", "_blank")} />
                      </div>
                </div>
            </div>
            <div className="w-60-l w-100 relative">
                <div className={styles.imageSlider} />
                <div className={styles.triangleSlider}>
                  <span></span>
                </div>
                <div className="absolute right-2 bottom-2">
                <ActionButton type="secondary" text={Resources.buttons.wantToBeSpeaker} url={constants.speakerCallUrl} target="_blank" />
                </div>
            </div>
        </div>

        {/* fin del slider */}
    </div>
    );
  }
}
