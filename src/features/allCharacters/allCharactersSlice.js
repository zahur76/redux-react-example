import allCharactersData from '../../data'

// slice allCharacters

// Dispatched when the user first opens the application.
// Sends the allcharacters array to the store.
export const loadData = () => {
return { 
    type: 'allCharacters/loadData',
    payload: allCharactersData 
    };  
}

const initialAllCharacters = [];
export const allCharactersReducer = (allCharacters = initialAllCharacters, action) => {
    switch(action.type) {
        case 'allCharacters/loadData':
            return action.payload
        default:
            return allCharacters;
    }
}