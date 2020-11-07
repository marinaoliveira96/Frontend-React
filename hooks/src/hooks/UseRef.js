import { useState, useRef, useEffect } from 'react';

const UseRef = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <h2>useRef</h2>

      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My Name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>focus</button>
    </>
  );
};

export default UseRef;
