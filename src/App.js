import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Supply from './Supply/Supply';
import Client from './Client/Client';
import Secret from './Supply/Secret';
import Login from './Client/Login';
import SupplyClients from './Supply/SupplyClients';
import SupplyProducts from './Supply/SupplyProducts';
import SupplyInvoices from './Supply/SupplyInvoices';
import Add_Clients from './Supply/Add_Clients';
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
            <Route exact path='/supply' component={Supply} />
            <Route exact path='/secret' component={Secret} />
            <Route exact path='/client' component={Client} />
            <Route exact path='/login' component={Login} />
            {/* <Route exact path='/supply/clients' component={SupplyClients} />
            <Route exact path='/supply/products' component={SupplyProducts} />
            <Route exact path='/supply/invoices' component={SupplyInvoices} />
            <Route exact path='/supply/add_clients' component={Add_Clients} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;