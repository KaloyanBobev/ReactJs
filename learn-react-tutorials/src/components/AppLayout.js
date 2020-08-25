import React from 'react';
import auth from './auth';

export default class AppLoyout extends React.Component {
    //Change to use class properties
    state = {
        firstName: ""
    }

    //Change to use arrow function
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick = (event) => {
        auth.logout(() => {
            this.props.history.push("/");
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"

                    />
                </form>
                <h1>{this.state.firstName}</h1>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
}