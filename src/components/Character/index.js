import "./index.css";

export default function Character() {
  let rand = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(rand);
  const onDragStart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
  };

  return (
    <>
      {rand % 2 == 0 ? (
        <div
          draggable="true"
          className="animal"
          id="fox"
          onDragStart={onDragStart}
        >
          🦊
        </div>
      ) : (
        <div
          draggable="true"
          className="animal"
          id="frog"
          onDragStart={onDragStart}
        >
          🐸
        </div>
      )}
    </>
  );
}
