import React, { useState } from "react";
import body from "../assets/body.jpg";

function PointerCli({ onPointerUpdate }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newPosition = { x, y };
    setPosition(newPosition);
    onPointerUpdate(newPosition); // Send position data to parent
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>PointerCli</div>
      <div>X: {position.x}, Y: {position.y}</div>
      <div className="w-[200px] h-[400px] relative">
        <img src={body} alt="body" className="w-[200px] h-[400px] absolute" />
        <div
          className="w-[200px] h-[400px] absolute"
          onClick={handleClick}
        >
          <div
            style={{
              position: "absolute",
              left: position.x - 5,
              top: position.y - 5,
              width: "10px",
              height: "10px",
              backgroundColor: "green",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PointerCli;
