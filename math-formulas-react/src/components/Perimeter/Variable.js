import React from 'react';



export default class Variable extends React.Component {

    render() {
        return (

            <label> {this.props.var}</label>
        )
    }

}