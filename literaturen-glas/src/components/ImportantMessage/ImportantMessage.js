import React from 'react';
import './ImportantMessage.scss';
import Message from './Message';

class ImportantMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            isTextVisible: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(prevState => ({
            isTextVisible: !prevState.isTextVisible
        }));
    }

    render() {

        return (
            <div className="message">
                <h1>РЕЗУЛТАТИ ОТ КОНКУРС</h1>
                {this.state.isTextVisible
                    ? <Message isVisible={this.state.isTextVisible} />
                    : <h2>ПЪРВО МЯСТО....</h2>}
                <button onClick={this.handleChange}>{this.state.isTextVisible ? "Прочети по-малко" : "Прочети повече"}</button>
            </div>
        )
    }
}

export default ImportantMessage;