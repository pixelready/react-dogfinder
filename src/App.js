import './App.css';
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

// const dogs = [
//     {
//       name: "Whiskey",
//       age: 5,
//       src: "whiskey",
//       facts: [
//         "Whiskey loves eating popcorn.",
//         "Whiskey is a terrible guard dog.",
//         "Whiskey wants to cuddle with you!"]
//       }
// ];

function App() {

  const [dogs, setDogs] = useState([]);
  const [hasData, setHasData] = useState(false);

  if (!hasData) {
    getDogs();
  }

  async function getDogs() {
    const dogs = await axios.get("http://localhost:5000/dogs")
    setDogs(currDogs => [...dogs.data]);
    setHasData(currData => true);
  }

  console.log(dogs);

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
