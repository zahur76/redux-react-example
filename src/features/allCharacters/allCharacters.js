import { React, useState, useEffect} from "react";
import './allCharacters.css';
import { store } from '../../app/store'
import { loadData } from './allCharactersSlice';
import SearchBar from "../searchTerm/searchTerm";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { setSearchTerm } from "../searchTerm/searchTermSlice";


function AllCharacters() {
  const [data, setData] = useState([]);  
  
  useEffect(() => {    
    store.dispatch(loadData())
    setData(store.getState().allCharacters);    
  }, [])

  const myFunction = () => {      
    let term = store.getState().searchTerm
    let allData = store.getState().allCharacters
    let newList = []    
    allData.map(element=>{
      if(((element.name).toLowerCase()).includes(term.toLowerCase())){
        newList.push(element)
      }           
    })
    setData(newList)    
  }  

  const renderCharacters = () => {
    return (data ).map((element)=>{
      return    <Col xs={6} sm={4} md={3} lg={3} className="text-light p-4">
                    <img src={element.image} alt={element.name} />                    
                    <div className="info">{element.name}</div>
                    <div className="info">{element.gender}</div>
                    <div className="info">Planet: {element.birth_planet}</div>
                    <div className="info pb-2">Birth Year: {element.birth_year}</div>                    
                </Col>                
              
    })
  }
  return (
    <div className="App">
      <Button className="bg-dark text-warning rounded-0 m-2" onClick={myFunction}>click</Button>      
      <Row>
        {renderCharacters()}
      </Row>      
    </div>
  );
}

export default AllCharacters;
