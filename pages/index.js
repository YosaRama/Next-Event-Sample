import EventList from "../components/events/events-list";
import { getAllEvents } from "../dummy-data";

function Homepage() {
  const allEventsData = getAllEvents();

  return (
    <div>
      <EventList items={allEventsData} />
    </div>
  );
}
export default Homepage;
