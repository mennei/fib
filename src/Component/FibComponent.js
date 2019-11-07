import React from 'react';
import './FibComponent.css';
const fibComponent = props => {
  return (
    <div className="Fib">
      <div><h1>Type number for Fibonacci calculation here:</h1></div>
      <div><input type="text" /></div>
      <div><button>send</button></div>
      <div><h1>Results are here:</h1></div>
      <div><textarea col="5" row="5" /></div>
    </div>
  );
};

export default fibComponent;
