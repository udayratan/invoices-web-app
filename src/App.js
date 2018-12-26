import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Supply from './Supply/Supply';
import Client from './Client/Client';
import Secret from './Supply/Secret';
import Login from './Client/Login';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="Invoices" style={{ textAlign: "center" }}> Invoices Application</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/secret">Suppliers</Link>
            </li>
            <li>
              <Link to="/login">Clients</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path='/supply' component={Supply} />
            <Route exact path='/secret' component={Secret} />
            <Route path='/client' component={Client} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
