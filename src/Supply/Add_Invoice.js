import React from 'react';
class Add_Invoice extends React.Component {

    constructor() {
        super();
        this.state = {
            Data: []
        }
    }

    componentDidMount() {
        this.selectOptions()
    }

    selectOptions() {
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
        return <div className="drop-down">
            <select>
                {this.state.Data.map((item) => <option key={item.ProductID} >{item.Product_Name}</option>)}
            </select>
        </div>;
    }
}

export default Add_Invoice;