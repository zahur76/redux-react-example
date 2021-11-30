import { React, useState, useEffect} from "react";
import './allCharacters.css';
import { store } from '../../app/store'
import { loadData } from './allCharactersSlice';
import SearchBar from "../searchTerm/searchTerm";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


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
        
        console.log(newList)
      }           
    })
    setData(newList)   
  }

  const renderCharacters = () => {
    return (data ).map((element)=>{
      return    <Col xs={6} md={4} lg={3} className="text-light p-4">
                    <img src={element.image} alt={element.name} />                    
                    <div className="info">{element.name}</div>
                    <div className="info">{element.gender}</div>
                    <div className="info">Birth Planet: {element.birth_planet}</div>
                    <div className="info pb-2">Birth Year: {element.birth_year}</div>                    
                </Col>                
              
    })
  }
  return (
    <div className="App">
      <Button className="bg-dark text-warning rounded-0" onClick={myFunction}>click</Button>
      <Row>
        {renderCharacters()}
      </Row>      
    </div>
  );
}

export default AllCharacters;
