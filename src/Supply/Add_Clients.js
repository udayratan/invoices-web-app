import React from 'react';
import './Add_Clients.css';
class Add_Clients extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: '',
            PhoneNumber: '',
            EmailID: '',
            GST_Number: ''
        }
    }
    Name_Changed(e) {
        this.setState({ Name: e.target.value })
    }
    PhoneNumber_Changed(e) {
        this.setState({ PhoneNumber: e.target.value })
    }
    EmailID_Changed(e) {
        this.setState({ EmailID: e.target.value })
    }
    GST_Number_Changed(e) {
        this.setState({ GST_Number: e.target.value })
    }
    Add_Client_Function(obj, e) {
        fetch('http://localhost:4000/Add_Clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: obj.state.Name,
                PhoneNumber: obj.state.PhoneNumber,
                EmailID: obj.state.EmailID,
                GST_Number: obj.state.GST_Number
            })
        }).then((res) => {
            return alert('Saved Successfully');
        }).then((Proceed) => {
            window.location = '/supply/clients';
        })
    };
    render() {
        return (
            <div className="center">
                <label style={{ marginTop: '5%' }}>Name</label>
                <input style={{ marginLeft: '10px' }} type="text" value={this.state.Name} onChange={this.Name_Changed.bind(this)} />

                <label>PhoneNumber</label>
                <input style={{ marginLeft: '10px' }} type="text" value={this.state.PhoneNumber} onChange={this.PhoneNumber_Changed.bind(this)} />

                <label>EmailID</label>
                <input style={{ marginLeft: '10px' }} type="text" value={this.state.EmailID} onChange={this.EmailID_Changed.bind(this)} />

                <label>GST_Number</label>
                <input style={{ marginLeft: '10px' }} type="text" value={this.state.GST_Number} onChange={this.GST_Number_Changed.bind(this)} />
                <br /><input type={'submit'} onClick={this.Add_Client_Function.bind(this, this)} />
            </div>
        )
    }
}
export default Add_Clients;