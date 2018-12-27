import React from 'react';
import './Add_Products.css';
class Add_Products extends React.Component {
    constructor() {
        super();
        this.state = {
            Product_Name: '',
            Product_Price: ''
        }
    }
    Product_Name_Changed(e) {
        this.setState({ Product_Name: e.target.value })
    }
    Product_Price_Changed(e) {
        this.setState({ Product_Price: e.target.value })
    }
    Add_Product_Function(obj, e) {
        fetch('http://localhost:4000/Add_Product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Product_Name: obj.state.Product_Name,
                Product_Price: obj.state.Product_Price
            })
        }).then((res) => {
            return alert('Saved Successfully');
        }).then((Proceed) => {
            window.location = '/supply/products';
        })
    };
    render() {
        return (
            <div className="center">
                <table className="AddForm">
                    <tbody>
                        <tr>
                            <td>
                                <label>Product Name</label>
                            </td>
                            <td>
                                <input style={{ marginLeft: '10px' }} type="text" value={this.state.Product_Name} onChange={this.Product_Name_Changed.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Product Price</label>
                            </td>
                            <td>
                                <input style={{ marginLeft: '10px' }} type="text" value={this.state.Product_Price} onChange={this.Product_Price_Changed.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' style={{ marginTop: '15px', marginLeft: '70px', position: 'absolute' }}>
                                <input className="Submit" type={'submit'} onClick={this.Add_Product_Function.bind(this, this)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Add_Products;