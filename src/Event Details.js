
import { useState } from "react";

function Details({title,Description,place}) {
  return (
      <>
      <h1>{title}</h1>
      <p>{Description}</p>
      <p>{place}</p>
      
      </>

  );
}


export default Details;