import React, { useState } from 'react';

const Example3 = () => {
  const [state, setState] = useState({ count: 0 });

  function click() {
    setState({ count: state.count + 1 });
  }

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example3;
