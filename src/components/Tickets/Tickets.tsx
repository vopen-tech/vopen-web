import React from "react";
import { resourcesService } from "../../services";

import { Props, State } from "./types";
import styles from "./Tickets.module.scss";
import { ActionButton } from "..";
import { ITicketInfo } from "../../types/ITicketInfo";
import { isTicketSaleOpen, isTicketSaleFinished } from "./utils";

export default class Tickets extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    ticketsInfos: []
  };

  renderEnabledTicket(ticketInfo: ITicketInfo) {
    const Resources = resourcesService.getResources();
    return (
      <div className={styles.enabledTicket}>
        <div className={styles.title}>
          {ticketInfo.name}
          <br /> {ticketInfo.price}
        </div>
        <ul className={styles.list}>
          {ticketInfo.benefits.map((benefit: string) => (
            <li className={styles.item}>
              <i className={`${styles.itemIcon} fas fa-check`} />
              <li className={styles.itemText}>{benefit}</li>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          {ticketInfo.buyLinks.map(item => (
            <ActionButton text={item.label || Resources.buttons.buy} url={item.url} />
          ))}
        </div>
      </div>
    );
  }

  renderDisabledTicket(ticketInfo: ITicketInfo) {
    const Resources = resourcesService.getResources();
    const buttonText = isTicketSaleFinished(ticketInfo) ? Resources.buttons.soldOut : Resources.buttons.soon;

    return (
      <div className={styles.disabledTicket}>
        <div className={styles.title}>
          {ticketInfo.name}
          <br /> {ticketInfo.price}
        </div>
        <ul className={styles.list}>
          {ticketInfo.benefits.map((benefit: string) => (
            <li className={styles.item}>
              <i className={`${styles.itemIcon} fas fa-check`} />
              <li className={styles.itemText}>{benefit}</li>
            </li>
          ))}
        </ul>
        <ActionButton type="disabled" text={buttonText} />
      </div>
    );
  }

  render() {
    const { ticketsInfos } = this.props;

    return (
      <div className={styles.tickets}>
        {ticketsInfos.map(ticketInfo => (isTicketSaleOpen(ticketInfo) ? this.renderEnabledTicket(ticketInfo) : this.renderDisabledTicket(ticketInfo)))}
      </div>
    );
  }
}
