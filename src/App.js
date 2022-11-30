import React from 'react';
import './components/Nav bar/Navbar.css'
import './App.css'
import './components/Banner/Banner.css'
import './components/rowpost/Rowpost.css'
import Navbar from './components/Nav bar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/rowpost/Rowpost';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Banner/>
          <Rowpost/>
    </div>
  );
}

export default App;
