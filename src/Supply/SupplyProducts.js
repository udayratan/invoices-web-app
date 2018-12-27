import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Add_Products from './Add_Products';
import './SupplyProducts.css';
class SupplyProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: []
        };
        this.ProductsList();
    }
    componentDidMount() {
        this.ProductsList();
    }
    ProductsList() {
        fetch('http://localhost:4000/List_All_Products')
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((Response) => {
                this.setState({ Data: Response })
            })
    }
    render() {
        const all_products = this.state.Data.map((item, i) => (
            <tr>
                <td>
                    {i + 1}
                </td>
                <td>
                    {item.Product_Name}
                </td>
                <td>
                    {item.Product_Price}
                </td>
            </tr>
        ));
        return (
            <Router>
                <div className="supply_products">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    S. No
                                </th>
                                <th>
                                    Product Name
                                </th>
                                <th>
                                    Product Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_products}
                        </tbody>
                    </table>

                    <button>
                        <Link to="/supply/add_products">
                            Add Products
                        </Link>
                    </button>
                    <Switch>
                        <Route exact path='/supply/add_products' component={Add_Products} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default SupplyProducts;