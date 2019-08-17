import { ITicketInfo } from "../../types/ITicketInfo";

/**
 * Returns if the ticket sale is open or not
 * @param ticketInfo The ticket info
 * @returns True if the ticket sale start date is in the past and
 * the end date is in the future (or there is no end date). False otherwise.
 */
function isTicketSaleOpen(ticketInfo: ITicketInfo): boolean {
  const now = new Date().toISOString();

  const ticketSaleStarted = !!ticketInfo.startDate && now > ticketInfo.startDate;
  const ticketSaleIsOngoing = ticketSaleStarted && (!ticketInfo.endDate || now < ticketInfo.endDate);

  if (ticketSaleStarted && ticketSaleIsOngoing) {
    return true;
  }

  return false;
}

/**
 * Returns if the ticket sale is finished
 * @returns True if there is an end date and it is in the past.
 */
function isTicketSaleFinished(ticketInfo: ITicketInfo): boolean {
  const now = new Date().toISOString();
  return !!ticketInfo.endDate && now > ticketInfo.endDate;
}

/**
 * Returns if the ticket sale is cloesd or not
 * @param ticketInfo The ticket info
 * @returns True if there are no dates defined for the ticket dates
 * or it is closed either because it already happened or didn't happen yet.
 */
function isTicketSaleClosed(ticketInfo: ITicketInfo): boolean {
  const now = new Date().toISOString();

  if (!ticketInfo.startDate) {
    return true;
  }

  if (isTicketSaleFinished(ticketInfo)) {
    return true;
  }

  const ticketSaleWillHappen = !!ticketInfo.startDate && now < ticketInfo.startDate;
  return ticketSaleWillHappen;
}

export { isTicketSaleOpen, isTicketSaleClosed, isTicketSaleFinished };
