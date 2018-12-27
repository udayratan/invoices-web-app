
import React from 'react';

class Secret extends React.Component {
    constructor() {
        super();
        this.code = '12345'
        this.state = {
            code: ''
        }
    }
    SubmittedCode(e) {
        this.setState({ code: e.target.value })
        // this.state.code = e.target.value;
    }
    CheckSecretCode(obj, e) {
        if (obj.code === obj.state.code) {
            window.location = '/supply';
        } else {
            alert('Invalid Code');
        }
    };
    render() {
        return (
            <div>
                <input type="text" placeholder='Submit Secret Code' value={this.state.code} onChange={this.SubmittedCode.bind(this)} />
                <br />
                <input type={'submit'} onClick={this.CheckSecretCode.bind(this, this)} />
            </div>
        )
    }
}
export default Secret;