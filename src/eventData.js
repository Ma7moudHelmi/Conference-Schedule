import { useState } from "react";
import Details from "./Event Details";

export function Data(){
    const [event, setEventData] = useState({
        title:"Apple Event",
        Description:"Details",
        place: "mahmoud"

    })
    <Details title={event.title}, />
}