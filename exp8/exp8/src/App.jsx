
import { useState } from 'react';
import './App.css';
function App() {
  // Step 3: Create state variable for counter value
  const [count, setCount] = useState(0);
  // Step 6: Event handlers to update state
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <div className="counter-card">
        <h1>React Counter Application</h1>
        
        {/* Step 4: Display the counter value */}
        <div className="count-display">{count}</div>
        <div className="button-group">
          {/* Step 5: Buttons for increment, decrement, and reset */}
          <button className="btn increment" onClick={handleIncrement}>
            Increment (+)
          </button>
          <button className="btn decrement" onClick={handleDecrement}>
            Decrement (-)
          </button>
        </div>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;