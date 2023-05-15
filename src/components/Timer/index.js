import { React, useState, useEffect } from "react";
import "./index.css";
export default function Timer() {
  const [minutes, setMinutes] = useState(parseInt(0));
  const [seconds, setSeconds] = useState(parseInt(45));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  return (
    <div className="TimerFrame">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
