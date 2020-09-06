import React from 'react';
import './App.css';
import Stitcher from './Stitcher'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
       <div >
        <Stitcher />
      </div>
    </Router>
  );
}

export default App;
