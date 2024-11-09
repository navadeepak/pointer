import { useState } from "react";
import "./App.css";
import PointerSer from "./components/pointerSer";
import PointerCli from "./components/pointerCli";
import PointerSample from "./components/PointerSample1";
import PointerSample2 from "./components/PointerSample2";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerUpdate = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-evenly">
        <PointerSer />
        <PointerSample2 />
      </div>
      <hr className="h-2"/>
      <div className="flex flex-row justify-evenly">
        <PointerCli onPointerUpdate={handlePointerUpdate} />
        <PointerSample position={position} />
      </div>
    </div>
  );
}

export default App;
