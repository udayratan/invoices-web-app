import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Supply.css';
import SupplyProducts from './SupplyProducts';
import SupplyClients from './SupplyClients';
import SupplyInvoices from './SupplyInvoices';

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
                        <Route path='/supply/clients' component={SupplyClients} />
                        <Route path='/supply/products' component={SupplyProducts} />
                        <Route path='/supply/invoices' component={SupplyInvoices} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Supply;