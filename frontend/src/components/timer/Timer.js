import './timer.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';


function Timer() {
  return (
    <div className="App">
     <CountdownTimer
     countdownTimestampMs={1659983662000}/>
    </div>
  );
}
 
export default Timer;
