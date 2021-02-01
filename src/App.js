import './App.css';
import Header from './Components/Header'
import React from 'react'
import Search from './Components/Search';
import Links from './Components/Links'

function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
         <div className='body'>
         <Search/>
         <Links/>
         </div>

    </div>
  );
}

export default App;
