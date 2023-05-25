import React from 'react'
import './MemoryCard.css';

export default function MemoryCard({ card,setSelected,disabled,rotated }) {

  const handleClick = () => {
    if(!disabled) {
      setSelected(card);
    }
  };

  return (
    <div className="card" >
      <div className={rotated ? "rotated":""}>
        <img className='cardFront' src={card.path} alt="" />
        <img className='cardBack' onClick={handleClick} src="/img/cover.jpeg" alt="" />
      </div> 
    </div>
  )
}
