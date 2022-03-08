import './App.css';
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

/** Dog Finder App
 * Controls routes and renders pages.
 * 
 * Props: None
 * 
 * State: Dogs [{name: "", age: #, src: "", facts: []}]
 * 
 * App --> [DogDetails, DogList]
 */

function App() {

  const [dogs, setDogs] = useState(null);

  
  //Axios call for all dogs
  async function getDogs() {
    const dogs = await axios.get("http://localhost:5000/dogs")
    setDogs(currDogs => [...dogs.data]);
  }

  if (!dogs) {
    getDogs();
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Route>
          <Switch>
            <Route exact path="/dogs/:name">
              <DogDetails dogs={dogs}/>
            </Route>
            <Route exact path="/dogs">
              <DogList dogs={dogs} />    
            </Route>
            <Redirect to="/dogs" />
          </Switch>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
