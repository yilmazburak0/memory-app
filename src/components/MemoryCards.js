import React, { useContext } from 'react';
import { CardsContext } from '../context/cardsContext';
import MemoryCard from './MemoryCard';

function MemoryCards() {
  const {cards,selectedOne,selectedTwo} = useContext(CardsContext);  
  return (
        cards.map(card => (
          <MemoryCard 
          card={card} 
          key={card.id}
          rotated={card === selectedOne || card === selectedTwo || card.matched}
          />
        ))
  )
}

export default MemoryCards