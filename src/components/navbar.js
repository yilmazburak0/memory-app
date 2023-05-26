import React, { useContext } from 'react';
import { CardsContext } from '../context/cardsContext';

function Navbar() {

  const {prepareCards,score} = useContext(CardsContext);  
  return (    
        <div className="container">
            <h1>Memory App</h1>
            { <button onClick={prepareCards}>Oyunu Başlat</button> }
            { <p>Score : {score}</p> }
        </div>
  )
};

export default Navbar;