import { useState } from "react";

import beetraxsapp from "./assets/logo_main.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://www.beetraxsmate.com" target="_blank">
          <img src={beetraxsapp} className="logo" alt="beetraxs_logo" />
        </a>
      </div>
      <h1>Upcoming BEETRaXs-M.A.T.E website</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the BEETRaXs Logo to learn more about our solution...
      </p>
    </div>
  );
}

export default App;
