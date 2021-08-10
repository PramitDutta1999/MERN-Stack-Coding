import React, { component } from 'react';
class CC extends React.Component {
    constructor() {
        super();
        this.state = {
            country: 'Bangladesh',
            language: 'Bengali'
        }
    }
    changecountry = () => {
        this.setState({ country: 'Japan' })
        this.setState({ language: 'Japanese' })
    }
    render() {
        return <div>
            <h1>This is class component</h1>
            <h1>The declared country is {this.state.country}</h1>
            <h1>The declared language is {this.state.language}</h1>
            <button onClick={this.changecountry}>Change Country</button>
        </div>
    }
}
export default CC