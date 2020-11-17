import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Example01 } from './Example01';
import Example02 from './Example02';
import Example03 from './Example03';
import { Home } from './Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="example01" element={<Example01/>} />
        <Route path="example02" element={<Example02/>} />
        <Route path="example03" element={<Example03/>} />
      </Routes>
    </div>
  );
}

export default App;
