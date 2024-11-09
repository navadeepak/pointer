import React from "react";
import body from "../assets/body.jpg";

function PointerSample({ position }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>PointerSample</div>
      <div>X: {position.x}, Y: {position.y}</div>
      <div className="w-[200px] h-[400px] relative">
        <img src={body} alt="body" className="w-[200px] h-[400px] absolute" />
        <div className="w-[200px] h-[400px] absolute">
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

export default PointerSample;
