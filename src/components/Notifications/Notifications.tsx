import React from "react";
import { PageSection } from "../../components";
import { IProps } from "./types";
import styles from "./Notifications.module.scss";
import { resourcesService } from "../../services";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Notifications extends React.PureComponent<IProps> {
  render() {
    const Resources = resourcesService.getResources();

    return (
      <>
        <PageSection className={styles.notificationsSection}>
          <div className={styles.banner}>
            <h1 className={styles.subtitle}>{Resources.pages.notifications}</h1>
          </div>
          <div className={styles.table}>
            {this.props.notifications.map((n, idx) => (
              <Card bg={"light"} key={idx} style={{ maxHeight: "24rem", height: "auto", width: "18rem", margin: "10px" }}>
                <Card.Header style={{ fontSize: "18px" }}>{n.title}</Card.Header>
                <Card.Body>
                  {!this.props.isSponsor && <Card.Text style={{ fontSize: "18px" }}>{n.sponsor}</Card.Text>}
                  <Card.Text as="h4" style={{ fontSize: "16px", overflowY: "auto", maxHeight: "8rem" }}>
                    <small style={{ fontSize: "18px" }} className="text-muted">
                      {n.message}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </PageSection>
      </>
    );
  }
}
