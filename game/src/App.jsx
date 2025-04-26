import { useState } from 'react';
import './App.css';

function App() {
  const [target] = useState(Math.floor(Math.random() * 10));
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [chances, setChances] = useState(3);

  const checkGuess = () => {
    if (chances > 0) {
      if (parseInt(guess) === target) {
        setMessage(`Congratulations!!! You guessed the correct number: ${target}`);
      } else {
        setMessage(guess > target ? 'Too high!' : 'Too low!');
        setChances(chances - 1); // Decrease chances after each guess
      }
    } else {
      setMessage(`Game Over! The correct number was ${target}`);
    }
    setGuess("");
  };

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <input 
        type="number" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
        disabled={chances === 0 || message.startsWith("Congratulations")} // Disable input after game over or correct guess
      />
      <button onClick={checkGuess} disabled={chances === 0 || message.startsWith("Congratulations")}>Check</button>
      <p>{message}</p>
      {chances === 0 && <button onClick={() => window.location.reload()}>Play Again</button>} {/* Reload the page to restart */}
    </div>
  );
}

export default App;