import React, { useState } from "react";
import Character from "../Character";
import "./index.css";

export default function Gamemap() {
  const [Timer, setTimer] = useState();
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState({
    point: 0,
    conceded: 0,
  });

  const onDragStart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const foxOnDrop = (e) => {
    console.log(e.dataTransfer.getData("id"), e.target.id);

    let dragId = String(e.dataTransfer.getData("id"));

    if (dragId == "fox") {
      setScore({ ...score, point: score.point + 1 });
      console.log(score);
      e.target.classList.add("sizeup");
      setTimeout(function() {
        e.target.classList.remove("sizeup");
      }, 400);
    }else{
      e.target.classList.add("vibration");
      setTimeout(function() {
        e.target.classList.remove("vibration");
      }, 400);
    }
    setCounter(counter + 1);
  };

  const frogOnDrop = (e) => {
    console.log(e.dataTransfer.getData("id"), e.target.id);

    let dragId = String(e.dataTransfer.getData("id"));

    if (dragId == "frog") {
      setScore({ ...score, point: score.point + 1 });
      console.log(score);
      e.target.classList.add("sizeup");
      setTimeout(function() {
        e.target.classList.remove("sizeup");
      }, 400);
    }else{
      e.target.classList.add("vibration");
      setTimeout(function() {
        e.target.classList.remove("vibration");
      }, 400);
    }
    setCounter(counter + 1);
  };

  return (
    <div className="main_div">
      <p>{score.point}</p>
      <Character />
      <div className="div">
        <div
          id="fox"
          className="div_box"
          onDragOver={onDragOver}
          onDrop={foxOnDrop}
        >
          fox
        </div>
        <div
          id="frog"
          className="div_box"
          onDragOver={onDragOver}
          onDrop={frogOnDrop}
        >
          frog
        </div>
      </div>
    </div>
  );
}
