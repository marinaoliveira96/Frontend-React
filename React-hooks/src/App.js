import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';

function App() {
  return (
    <>
      {/*  <Movie id={1} /> */}
      <Counter />
    </>
  );
}

export default App;