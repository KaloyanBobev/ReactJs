import React from 'react';

export default class Information extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.info[this.props.number].header}</h3>
                <img src={require("../../assests/" + this.props.info[this.props.number].src + ".png")} alt="problem" />
                <div >Information: {this.props.info[this.props.number].information}</div>
                <div > Formula: {this.props.info[this.props.number].formula}</div>
                <div >Explanation: {this.props.info[this.props.number].explanation}</div>
            </div>


        )
    }

}