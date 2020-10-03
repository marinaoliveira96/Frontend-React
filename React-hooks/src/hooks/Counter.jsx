import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

export default function Counter(props) {
  //não usar hooks com loops, nest functions e if statement
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useDocumentTitle(`${name} has cliked ${count} times`);
  /* //useEffect = toda vez que o componente renderizar
useEffect(() => {
  document.title = `${name} has cliked ${count} times`;

  return () => {
    console.log('Clean up'); //chamdo toda vez que renderiza
    //componenteWillUnmount
  };
}, [count, name]); //array de dependencias = só muda quando o valor passado no array mudar */

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked: {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
