import React from 'react';

class Question extends React.Component {

    render() {
        return (
            <div>
                <h3>Question {this.props.infos[this.props.number].id}</h3>
                <div >Task: {this.props.infos[this.props.number].task}</div>
                <img src={require("../../assests/" + this.props.infos[this.props.number].src + ".png")} alt="problem" />
            </div>
        )
    }
}

export default Question;