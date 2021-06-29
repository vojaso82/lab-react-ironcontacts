import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json';



function App() {
  //Filter first 5 contacts
  let firstFiveContacts = [...Contacts].filter((contact, i) => i < 5)
  let allOther = [...Contacts].filter((contact, i) => i >= 5);
  const[fiveContacts, setFiveContacts] = useState(firstFiveContacts);
  const [allOtherContacts, setAllOtherContacts] = useState(allOther);
  
  //Show first 5 contacts
  const ShowContacts = () => {
  let newContactsArray = fiveContacts.map((eachContact, i) => {
        return (
            <tr key ={eachContact.id}>

             <td><img src = {eachContact.pictureUrl} width="50vw"/></td>
             <td>{eachContact.name}</td>
             <td>{eachContact.popularity.toFixed(2)}</td>
             <button class="delete"onClick = {(e) => deleteMovie(i)} style = {{marginTop:"30px"}}>Delete</button>
            </tr>
        )
    })
    return newContactsArray
}

function addRandomContact(){

  let firstFiveContactsCopy = [...fiveContacts];
  let randomContact = allOtherContacts[Math.floor(Math.random() * allOtherContacts.length)]
  firstFiveContactsCopy.push(randomContact)
  setFiveContacts(firstFiveContactsCopy);

}


function sortByName(){

  let firstFiveContactsCopy = [...fiveContacts];
  firstFiveContactsCopy.sort((a, b) => a.name.localeCompare(b.name));
  setFiveContacts(firstFiveContactsCopy);
}

function sortByPopularity(){

  let firstFiveContactsCopy = [...fiveContacts];
  firstFiveContactsCopy.sort((a, b) => b.popularity - a.popularity);
  setFiveContacts(firstFiveContactsCopy);
}

function deleteMovie(movie){
  let firstFiveContactsCopy = [...fiveContacts];
  firstFiveContactsCopy.splice(movie, 1)
  setFiveContacts(firstFiveContactsCopy);

}

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
      <button className = "sort-buttons" onClick = {() => addRandomContact()} >Add Random Contact</button>
      <button className = "sort-buttons" onClick = {() => sortByName()} >Sort by name</button>
      <button className = "sort-buttons" onClick = {() => sortByPopularity()} >Sort by popularity</button>
      </div>
    <table>
      
  <tr className = "action">
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Action</th>
  </tr>
  <ShowContacts/>

     </table> 
    </div>
  );
}

export default App;
