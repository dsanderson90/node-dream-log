import React, { Component } from 'react';
import Memory from './Memory';
import Signup from './Signup';
import Signin from './Signin';
import Logout from './Logout';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const token = localStorage.getItem('access_token');
class App extends Component {

  render() {
    return (
  <Router>
    <NavBar>
      <Link to="/">Memories</Link>
      <Link to="/register">Register</Link>
      {token ? <Logout/> :
      <Link to="/login">Login</Link>
      }
      </NavBar>
    <Route exact path="/" component={Memory} />
    <Route path="/register" component={Signup} />
    <Route path="/login" component={Signin} />
    </Router>
    )
  }
}
export default App;
