import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return(
    <div className="App">
      <div className='container'>

      
      <Weather/>

    <footer>
      This project was coded by <a href='https://www.matildahnkambule.com' target='_blank'>Matildah Nkambule</a> and is {""}
        <a href='https://github.com/Matildah81/react-weather-app' target='_blank'>Open-Sourced on Gitub</a>
      
    </footer>
     </div>
  </div>);
  
}
