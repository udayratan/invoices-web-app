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
            let path = `/supply`;
            this.props.history.push(path)
        } else {
            alert('Invalid Code');
        }
    };
    render() {
        return (
            <div>
                <input type="text" placeholder='Submit Secret Code' value={this.state.code} onChange={this.SubmittedCode.bind(this)} />
                <br />
                <h4>{this.state.code}</h4>
                <input type={'submit'} onClick={this.CheckSecretCode.bind(this, this)} />
            </div>
        )
    }
}
export default Secret;