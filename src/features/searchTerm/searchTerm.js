import { React, useState, useEffect} from "react";
import './searchTerm.css';
import Col from 'react-bootstrap/Col'
import { store } from '../../app/store'
import { setSearchTerm } from "../searchTerm/searchTermSlice";

function SearchBar() {  
    const termhandler = (event) =>{        
        store.dispatch(setSearchTerm(event.target.value))
        console.log(store.getState())
    }

    return (
        <div className="App">
            <Col className="text-center">     
                <input className="search-bar w-50 mb-3 mt-3" placeholder='search character' onChange={termhandler}/>
            </Col>
        </div>
    );
}

export default SearchBar;
