const cardReducers = (state,action) =>{
    switch (action.type) {
        case "SET_CARDS":
            return {
                ...state,
                cards: action.cards
            }
        case "SET_ONE":
            return {
                ...state,
                selectedOne:action.card
            }    
        case "SET_TWO":
            return {
                ...state,
                selectedTwo:action.card
        }
        case "RESET_STATES":
            return {
                ...state,
                selectedOne:null,
                selectedTwo:null,
                disabled:false
            }    
        case "SET_DİSABLED":
            return {
                ...state,
                disabled:true
            }    
        case "SET_SCORE":
            return {
                ...state,
                score: state.score + 1
            }

        default:
            return state;
    }


};


export default cardReducers;