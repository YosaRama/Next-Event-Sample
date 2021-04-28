import AddButton from "../libs/button";

function EventItem(props) {
  const { title, image, date, address, id } = props;

  const urlSingleEvents = `/events/${id}`;

  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{address}</p>
      </div>
      <div>
        <AddButton link={urlSingleEvents}>
          <span>Go to Events</span>
        </AddButton>
      </div>
    </div>
  );
}

export default EventItem;
