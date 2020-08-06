import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ListProducts from './components/ListProducts'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slider />
      <ListProducts />
    </div>
  );
}

export default App;
