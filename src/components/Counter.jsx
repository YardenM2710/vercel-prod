import React from 'react';
import useStore from '../store/useStore';

export function Counter() {
  // 👇 Select individual values/functions from Zustand store
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
