import React, { useState} from "react";
import ReactDOM from "react-dom";
import NewWindow from "react-new-window";
import {Map1, Map2} from "./map.js";
import "./App.css";

export default function App() {
  const [isPopOut, setIsPopOut] = useState(false);

  return (
    <div className="App">
      <h1>Google Map Pop Example</h1>
      <button
        style={{
          marginBottom: "20px" ,
          padding:'10px',
          borderRadius: '5px',
        }}
        onClick={() => {
          setIsPopOut(!isPopOut);
        }}
      >
        Pop Out google map:{isPopOut.toString()}
      </button>

      {!isPopOut&&<Map1 />}

      {isPopOut && (
        <NewWindow>
          <Map1 />
        </NewWindow>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
