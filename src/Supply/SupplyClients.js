import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add_Clients from './Add_Clients';
import './SupplyClients.css';
class SupplyClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
        this.ClientList();
    }

    componentDidMount() {
        this.ClientList();
    }
    ClientList() {
        fetch('http://localhost:4000/List_All_Clients')
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((Response) => {
                // Do something with the result
                console.log("Response");
                console.log(Response);
                this.setState({ Data: Response })
            })
    }
    render() {
        const all_clients = this.state.Data.map((item, i) => (
            <tr>
                <td>
                    {item.Name}
                </td>
                <td>
                    {item.PhoneNumber}
                </td>
                <td>
                    {item.EmailID}
                </td>
                <td>
                    {item.GST_Number}
                </td>
            </tr>
        ));
        return (
            <Router>
                <div className="supply_client">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Phone Number
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    GST Number
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_clients}
                        </tbody>
                    </table>

                    <button>
                        <Link to="/supply/add_clients">
                            Add Clients
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path='/supply/add_clients' component={Add_Clients} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default SupplyClients;