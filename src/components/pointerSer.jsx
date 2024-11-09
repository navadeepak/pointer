import React, { useState } from "react";
import body from "../assets/body.jpg";

function PointerSer() {
  const [selectedPoints, setSelectedPoints] = useState([]);

  const handleSpanClick = (id) => {
    if (selectedPoints.length < 2) {
      setSelectedPoints([...selectedPoints, id]);
    } else {
      setSelectedPoints([id]);
    }
  };

  const isSpanSelected = (id) => {
    return selectedPoints.includes(id);
  };

  const isSpanInBox = (id) => {
    if (selectedPoints.length !== 2) return false;
    
    const [start, end] = selectedPoints.sort((a, b) => a - b);
    const startRow = Math.floor(start / 40);
    const endRow = Math.floor(end / 40);
    const startCol = start % 40;
    const endCol = end % 40;
    const currentRow = Math.floor(id / 40);
    const currentCol = id % 40;

    return currentRow >= startRow && 
           currentRow <= endRow && 
           currentCol >= Math.min(startCol, endCol) && 
           currentCol <= Math.max(startCol, endCol);
  };

  const createSpans = () => {
    const spans = [];
    for (let i = 0; i < 3200; i++) {
      spans.push(
        <span
          key={i}
          id={`pixel-${i}`}
          onClick={() => handleSpanClick(i)}
          className={`w-[5px] h-[5px] inline-block ${
            isSpanSelected(i) ? 'bg-red-500' : 
            isSpanInBox(i) ? 'bg-green-200' : 'bg-transparent'
          }`}
        ></span>
      );
    }
    return spans;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>PointerSer</div>
      <div>Selected Points: {selectedPoints.join(', ')}</div>
      <div className="w-[200px] h-[400px] relative">
        <img src={body} alt="body" className="w-[200px] h-[400px] absolute z-0" />
        <div className="w-[200px] h-[400px] flex flex-wrap absolute z-10">
          {createSpans()}
        </div>
      </div>
    </div>
  );
}
export default PointerSer;