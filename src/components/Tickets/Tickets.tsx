import React from "react";
import { resourcesService } from "../../services";
import { ActionButton } from "..";
import { IEditionTicket } from "../../types/IEditionTicket";
import { isTicketSaleOpen, isTicketSaleFinished } from "./utils";

import { Props, State } from "./types";
import styles from "./Tickets.module.scss";

export default class Tickets extends React.PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    tickets: []
  };

  getBenefits(): string[] {
    const Resources = resourcesService.getResources();

    return [
      Resources.tickets.benefit1,
      Resources.tickets.benefit2,
      Resources.tickets.benefit3,
      Resources.tickets.benefit4,
      Resources.tickets.benefit5,
      Resources.tickets.benefit6,
      Resources.tickets.benefit7,
      Resources.tickets.benefit8
    ];
  }

  renderEnabledTicket(ticketInfo: IEditionTicket) {
    const Resources = resourcesService.getResources();

    return (
      <div className={styles.enabledTicket}>
        <div className={styles.title}>
          {ticketInfo.name}
          <br /> {ticketInfo.price}
        </div>
        <ul className={styles.list}>
          {this.getBenefits().map((benefit: string) => (
            <li className={styles.item}>
              <i className={`${styles.itemIcon} fas fa-check`} />
              <li className={styles.itemText}>{benefit}</li>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          {ticketInfo.buyLinks.map(link => (
            <ActionButton text={link.label || Resources.buttons.buy} url={link.url} />
          ))}
        </div>
      </div>
    );
  }

  renderDisabledTicket(ticketInfo: IEditionTicket) {
    const Resources = resourcesService.getResources();
    const buttonText = isTicketSaleFinished(ticketInfo) ? Resources.buttons.soldOut : Resources.buttons.soon;

    return (
      <div className={styles.disabledTicket}>
        <div className={styles.title}>
          {ticketInfo.name}
          <br /> {ticketInfo.price}
        </div>
        <ul className={styles.list}>
          {this.getBenefits().map((benefit: string) => (
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
    const { tickets } = this.props;
    const orderedTickets = tickets.sort((itemA: IEditionTicket, itemB: IEditionTicket) => (itemA.price < itemB.price ? -1 : itemA.price > itemB.price ? 1 : 0));
    return (
      <div className={styles.tickets}>
        {orderedTickets.map(ticket => (isTicketSaleOpen(ticket) ? this.renderEnabledTicket(ticket) : this.renderDisabledTicket(ticket)))}
      </div>
    );
  }
}
