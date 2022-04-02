import { useState } from "react";

function Details({ title, Description, location }) {
  return (
    <>
      <div className="Event ">
        <h1>{title}</h1>
        <p>{Description}</p>
        <br />
        <h3>{location}</h3>
        <br />
        <button id="btnBuy">Buy Tickets</button>
      </div>
    </>
  );
}

export default Details;
