import { useRouter } from "next/router";
import { Fragment } from "react";
import EventSingle from "../../components/events/events-single";
import { getEventsById } from "../../dummy-data";

function SingleEvent() {
  const router = useRouter();

  const singleEvent = getEventsById(router.query.eventId);
  const eventDetail = singleEvent[0];

  return <EventSingle eventDetail={eventDetail} />;
}

export default SingleEvent;
