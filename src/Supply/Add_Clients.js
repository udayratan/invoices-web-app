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
                <table className="AddForm">
                    <tbody>
                        <tr>
                            <td>
                                <label>Name</label>
                            </td>
                            <td>
                                <input style={{ marginLeft: '10px' }} type="text" value={this.state.Name} onChange={this.Name_Changed.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>PhoneNumber</label>
                            </td>
                            <td>
                                <input style={{ marginLeft: '10px' }} type="text" value={this.state.PhoneNumber} onChange={this.PhoneNumber_Changed.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>EmailID</label>
                            </td>
                            <td>
                                <input style={{ marginLeft: '10px' }} type="text" value={this.state.EmailID} onChange={this.EmailID_Changed.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>GST_Number</label>
                            </td>
                            <td>
                                <input style={{ marginLeft: '10px' }} type="text" value={this.state.GST_Number} onChange={this.GST_Number_Changed.bind(this)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' style={{ marginTop: '15px', marginLeft: '70px', position: 'absolute' }}>
                                <input className="Submit" type={'submit'} onClick={this.Add_Client_Function.bind(this, this)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Add_Clients;