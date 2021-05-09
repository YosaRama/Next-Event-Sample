import { Fragment } from "react";
import AddButton from "../libs/button";
import styles from "./events-single.module.css";

function EventSingle(props) {
  const { eventDetail } = props;
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div className={styles.topContent}>
            <h1>{eventDetail?.title}</h1>
            <img src={eventDetail?.image} alt={eventDetail?.title} />
          </div>
        </div>
        <div className={styles.botContainer}>
          <p>{eventDetail?.date}</p>
          <p>{eventDetail?.location}</p>
          <p>{eventDetail?.description}</p>
        </div>
        <div className={styles.button}>
          <AddButton link="/events">All Events</AddButton>
        </div>
      </div>
    </Fragment>
  );
}

export default EventSingle;
