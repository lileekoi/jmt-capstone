import Navbar from './Navbar';
import Home from './Home';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Fragment } from 'react';
import RecipeGenerator from './RecipeGenerator';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe-generator">
            <RecipeGenerator />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}


export default App;