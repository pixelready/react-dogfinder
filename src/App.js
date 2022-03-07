import './App.css';
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"]
      }
];


function App() {
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Route>
          <Switch>
            
            <Route exact path="/dogs/:name">
              <DogDetails />
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
