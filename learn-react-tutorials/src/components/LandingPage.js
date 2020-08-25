import React from 'react';
import auth from './auth';

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleClick = (event) => {
        auth.login(() => {
            this.props.history.push("/app")
        })
    }

    render() {
        return (
            <div>
                <h1> Landing Page</h1>
                <button onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}
