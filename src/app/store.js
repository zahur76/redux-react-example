import { createStore, combineReducers } from 'redux'

// Import the slice reducers here.
import { allCharactersReducer } from '../features/allCharacters/allCharactersSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';

// slice: allCharacters and searhTerm
// slices are the properties that change


// Create your `rootReducer` here using combineReducers().
const reducers = {
    allCharacters: allCharactersReducer,
    searchTerm: searchTermReducer
};
  
const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);
