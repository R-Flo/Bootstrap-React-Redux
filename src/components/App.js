import React, { Component } from 'react';


class App extends Component {

    addToCounter = () => {
        this.props.actions.add(10);
    };

    render() {
        return (
            <div id="main">
                My APP
                <button onClick={this.addToCounter}>{ this.props.count }</button>
            </div>
        );
    }
}

export default App;
