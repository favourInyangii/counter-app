import { useState } from "react";
import './App.css'; // Importing the CSS file

function App() {
  const [count, setCount] = useState(0);  // Declare the state variable for counter

  const handleIncrease = () => {
    setCount(count + 1);  // Increase counter by 1
  };

  const handleDecrease = () => {
    setCount(count - 1);  // Decrease counter by 1
  };

  const handleReset = () => {
    setCount(0);  // Reset counter to 0
  };

  return (
    <div className="App">  {/* The className is now 'App' */}
      <h1>Simple Counter App</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
