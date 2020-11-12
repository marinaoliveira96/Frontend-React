import React, { useState, useCallback } from 'react';
import { Hello } from '../components/Hello';

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const favoriteNums = [9, 5, 7];

  // nao vai renderizar de novo (re-render) se não mudar a funcao
  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <div>Count: {count}</div>
    </div>
  );
}
