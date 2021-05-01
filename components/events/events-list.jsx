import EventItem from "./events-item";

function EventList(props) {
  const { items } = props;

  return (
    <div>
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default EventList;
