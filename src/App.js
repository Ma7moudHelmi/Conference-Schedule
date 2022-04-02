// import logo from './logo.svg';
import './App.css';
import Nav  from "./nav";
import {Data} from "./eventData";
import { useState } from 'react';
import {SpeakerList} from './speakerData';
function App() {
  const [Speakersnames, setTodos] = useState(["Speaker", "Speaker","Speaker" , "Speaker"]);

  return (
    <>
    <Nav/>
    <Data/>
    <div className='speakerlist'> 

    <SpeakerList names={Speakersnames} imagesURL="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" />
    </div>
    </>
  );

}

export default App;
