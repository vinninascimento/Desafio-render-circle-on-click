import React, { useState } from 'react';
import Circle from './components/Circle';
import UndoButton from './components/UndoButton';
import RedoButton from './components/RedoButton';
import ClearButton from './components/ClearButton';
import './index.css'
const App = () => {
  const [circles, setCircles] = useState([]);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const handleUndo = () => {
    if (history.length > 0) {
      setFuture([...future, circles]);
      const prevCircles = history.pop();
      setCircles(prevCircles);
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      setHistory([...history, circles]);
      const nextCircles = future.pop();
      setCircles(nextCircles);
    }
  };

  const handleClick = (event) => {
    const { left, top } = event.target.getBoundingClientRect();
    const newCircle = {
      x: event.clientX - left,
      y: event.clientY - top
    };
    setCircles([...circles, newCircle]);
    setHistory([...history, circles]);
    setFuture([]);
  };

  const handleClear = () => {
    setCircles([]);
    setHistory([]);
    setFuture([]);
  }

  return (
    <div className='App-container'>
      <div>
        <UndoButton onClick={handleUndo} />
        <RedoButton onClick={handleRedo} />
        <ClearButton onClick={handleClear} />
      </div>
      <div
        onClick={handleClick}
        style={{ width: '100%', height: '930px', position: 'relative' }}
      >
        {circles.map((circle, index) => (
          <Circle key={index} x={circle.x} y={circle.y} />
        ))}
      </div>
    </div>
  );
};

export default App;