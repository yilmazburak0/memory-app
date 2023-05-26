import React from "react";
import cardReducers from '../reducers/cardsReducer';
import { useEffect, useReducer } from 'react';

export const CardsContext = React.createContext();

const cardList = [
    { "path": "img/1.jpeg",matched:false },
    { "path": "img/2.jpeg",matched:false },
    { "path": "img/3.jpeg",matched:false },
    { "path": "img/4.jpeg",matched:false },
    { "path": "img/5.jpeg",matched:false },
    { "path": "img/6.jpeg",matched:false }
  ];
  

const CardsContextProvider = (props) => {

    const initStates = {
        cards:[],
        selectedOne:null,
        selectedTwo:null,
        disabled:false,
        score:0
      }
    
      const [state,dispatch] = useReducer(cardReducers,initStates)
    
      const prepareCards = () => {
        const sortedCards = [...cardList, ...cardList]
          .sort(() => 0.5 - Math.random())
          .map((card) => ({ ...card, id: Math.random() }));
    
        // setCards(sortedCards);
        dispatch({
          type:"SET_CARDS",
          cards:sortedCards
        })
        dispatch({
          type:"RESET_STATES"
        })
        
        state.score = 0;
      }
    
      useEffect(() => {
        prepareCards();
      }, []);
    
      const setSelected = (card) => {
        state.selectedOne ?  dispatch( { type:"SET_TWO",card } ) : dispatch( { type:"SET_ONE",card} ) };
    
      const resetStates = () => {
        dispatch({
          type:"RESET_STATES"
        })
      };
    
      useEffect(() => {
        if ( (state.selectedOne && state.selectedTwo)) {
          dispatch( { type:"SET_SCORE" } )  
          if (state.selectedOne.path === state.selectedTwo.path) {
            dispatch( { type:"SET_DİSABLED" } ) 
            const newCards = state.cards.map(card => {
              if (card.path === state.selectedOne.path) {
                return ({...card,matched:true})
              }
              else{ return card }
            })
            dispatch( { type:"SET_CARDS", cards:newCards } ) 
            resetStates();
          }
          else{setTimeout(() => {
            resetStates();
          }, 1000)}; 
        }
      }, [state.selectedOne,state.selectedTwo]);

    return (
        <CardsContext.Provider value={{
            cards:state.cards,
            disabled:state.disabled,
            setSelected,
            selectedOne:state.selectedOne,
            selectedTwo:state.selectedTwo,
            prepareCards,
            score:state.score
        }}>
            {props.children}
        </CardsContext.Provider>

    )
};


export default CardsContextProvider;