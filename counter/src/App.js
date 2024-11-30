import './App.css';
import { useState } from "react"

function App() {

  const [counter, setCounter] = useState(0)

  function handleCounterClick() {
    setCounter( counter + 1)
  }

  return (
    <div>
      {counter}
      <button onClick={handleCounterClick}>+</button>
    </div>
  );
}

export default App;
