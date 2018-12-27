import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Supply.css';
import SupplyProducts from './SupplyProducts';
import SupplyClients from './SupplyClients';
import SupplyInvoices from './SupplyInvoices';
import Add_Clients from './Add_Clients';

class Supply extends React.Component {
    render() {
        return (
            <Router>
                <div className="tab">
                    <button className="tablinks">
                        <Link to="/supply/clients">
                            Clients
                        </Link>
                    </button>
                    <button className="tablinks">
                        <Link to="/supply/products">
                            Products
                        </Link>
                    </button>
                    <button className="tablinks">
                        <Link to="/supply/invoices">
                            Invoices
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path='/supply/clients' component={SupplyClients} />
                        <Route exact path='/supply/products' component={SupplyProducts} />
                        <Route exact path='/supply/invoices' component={SupplyInvoices} />
                        {/* <Route exact path='/supply/add_clients' component={Add_Clients} /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Supply;