import React from 'react';
import './App.css';
import Header from './../src/component/header';
import Homepage from './pages/homepage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
