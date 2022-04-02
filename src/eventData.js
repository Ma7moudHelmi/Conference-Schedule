import { useState } from "react";
import Details from "./Event Details";

export function Data() {
  const [event, setEventData] = useState({
    title: "Apple Events",
    Description:
      "  An Apple event is a high-level event that conforms to the Apple Event Interprocess Messaging Protocol. The Apple Event Manager uses the services of the Event Manager to send Apple events between applications on the same computer",
    location: "the event will be in April,21 2022 At NewYork City",
  });
  return (
    <Details
      title={event.title}
      Description={event.Description}
      location={event.location}
    />
  );
}
