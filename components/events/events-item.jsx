import AddButton from "../libs/button";
import styles from "./events-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const urlSingleEvents = `/events/${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.text_container}>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{location}</p>
        <div className={styles.button}>
          <AddButton link={urlSingleEvents}>
            <span>Go to Events</span>
          </AddButton>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
