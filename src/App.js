import React from 'react';
import Nav from './Components/Nav';
import routes from './routes';
import './App.css';
import {withRouter} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ? null: <Nav history={props.location}/>}
      {routes}
      
    </div>
  );
}

export default withRouter(App);
