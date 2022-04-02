import React from "react";
import './App.css';
export function SpeakerItem({ speakerName, imageURL }) {
  return (
    < div className="speakersize">
        <img src={imageURL} style={{width:"40%"}}/>
      <p>{speakerName}</p>
    </div>
  );
}
