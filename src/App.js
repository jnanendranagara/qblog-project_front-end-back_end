import React from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import First from './Component/First';
import Signup from './Component/Signup';
import Dash from './Component/Dash';
import Signin from './Component/Signin';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/" component={First}></Route> 
           <Route exact path="/signup" component={Signup}></Route> 
           <Route exact path="/signin" component={Signin}></Route>
           <Route exact path="/board" component={Dash}></Route>  
           
        </Switch>
      </Router>
    </div>
  );
}

export default App;
