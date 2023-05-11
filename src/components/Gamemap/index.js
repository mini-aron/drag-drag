import React, { useState } from "react";
import Character from "../Character";

export default function Gamemap() {
  const [Timer,setTimer] = useState();
  const [counter,setCounter] = useState(0);
  const [score,setScore] = useState({
    point:0,
    conceded:0
  });

  const onDragStart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const foxOnDrop = (e) => {
    console.log(e.dataTransfer.getData("id"),e.target.id);
   
    let dragId=String(e.dataTransfer.getData("id"))

    if(dragId=="fox"){
      setScore({...score,point:score.point+1})
      console.log(score)
    }
    setCounter(counter+1);
  };

  const frogOnDrop = (e) => {
    console.log(e.dataTransfer.getData("id"),e.target.id);
   
    let dragId=String(e.dataTransfer.getData("id"))

    if(dragId=="frog"){
      setScore({...score,point:score.point+1})
      console.log(score)
    }
    setCounter(counter+1);
  };

  return (
    <div>
      <div>{score.point}</div>
      <Character />

      <div id="fox" onDragOver={onDragOver} onDrop={foxOnDrop}>
        fox
      </div>
      <div id="frog" onDragOver={onDragOver} onDrop={frogOnDrop}>
        frog
      </div>
    </div>
  );
}
