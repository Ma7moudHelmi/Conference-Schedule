// import logo from './logo.svg';
import './App.css';
import Details from './Event Details';
import Nav  from "./nav";
import Home from "./home"
import Location from "./locationInfo";
import {Data} from "./eventData";
function App() {

  return (
    <>
      <Nav/>
      <Data/>
     {/* <Nav /> */}
     {/* <Home />
     <Location /> */}
    </>
  );

}

export default App;
