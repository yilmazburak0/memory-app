import { useEffect, useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';

const cardList = [
  { "path": "/img/1.jpeg",matched:false },
  { "path": "/img/2.jpeg",matched:false },
  { "path": "/img/3.jpeg",matched:false },
  { "path": "/img/4.jpeg",matched:false },
  { "path": "/img/5.jpeg",matched:false },
  { "path": "/img/6.jpeg",matched:false }
];


function App() {
  const [cards, setCards] = useState([]);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);
  const [disabled,setDisabled] = useState(false);
  const [score,setScore] = useState(0);

  const prepareCards = () => {

    const sortedCards = [...cardList, ...cardList]
      .sort(() => 0.5 - Math.random())
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(sortedCards);
    resetStates();
    setScore(0);
  }

  useEffect(() => {
    prepareCards();
  }, []);

  const setSelected = (card) => {
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card);
  };

  const resetStates = () => {
    setSelectedOne(null);
    setSelectedTwo(null);
    setDisabled(false);
  };

  useEffect(() => {
    if ( (selectedOne && selectedTwo)) {
      setScore(score + 1);  
      if (selectedOne.path === selectedTwo.path) {
        setDisabled(true);
        const newCards = cards.map(card => {
          if (card.path === selectedOne.path) {
            return ({...card,matched:true})
          }
          else{ return card }
        })
        setCards(newCards);
        resetStates();
      }
      else{setTimeout(() => {
        resetStates();
      }, 1000)}; 
    }

  }, [selectedOne,selectedTwo]);


  return (
    <div className="container">
      <h1>Memory App</h1>
      <button onClick={prepareCards}>Oyunu Başlat</button>
      <p>Score : {score}</p>

      <div className="card-grid">
        {
          cards.map(card => (
            <MemoryCard 
            card={card} 
            key={card.id}
            disabled= {disabled}
            setSelected = {setSelected}
            rotated={card === selectedOne || card === selectedTwo || card.matched}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
