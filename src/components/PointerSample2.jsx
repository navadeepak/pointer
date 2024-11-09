import React, { useState } from "react";
import body from "../assets/body.jpg";

function PointerSample2() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const isSpanInBox = (id) => {
    if (!start || !end) return false;
    
    const startNum = parseInt(start);
    const endNum = parseInt(end);
    const [startPoint, endPoint] = [startNum, endNum].sort((a, b) => a - b);
    
    const startRow = Math.floor(startPoint / 40);
    const endRow = Math.floor(endPoint / 40);
    const startCol = startPoint % 40;
    const endCol = endPoint % 40;
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
          className={`w-[5px] h-[5px] inline-block ${
            i === parseInt(start) || i === parseInt(end) ? 'bg-red-500' : 
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
      <div>
        Start: <input 
          type="number" 
          value={start} 
          onChange={(e) => setStart(e.target.value)}
          className="border mx-2"
        />
        End: <input 
          type="number" 
          value={end} 
          onChange={(e) => setEnd(e.target.value)}
          className="border mx-2"
        />
      </div>
      <div className="w-[200px] h-[400px] relative">
        <img src={body} alt="body" className="w-[200px] h-[400px] absolute z-0" />
        <div className="w-[200px] h-[400px] flex flex-wrap absolute z-10">
          {createSpans()}
        </div>
      </div>
    </div>
  );
}
export default PointerSample2;