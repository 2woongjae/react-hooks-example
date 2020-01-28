import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  if (action.type === 'PLUS') {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

const Example8 = ({ count }) => {
  const [state, dispatch] = useReducer(reducer, { count });
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'PLUS' });
    }, 2000);
  }, []);

  function click() {
    dispatch({ type: 'PLUS' });
  }

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example8;
