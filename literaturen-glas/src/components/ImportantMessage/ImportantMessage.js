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
            <div id="message">
                <h2>РЕЗУЛТАТИ ОТ КОНКУРС</h2>
                <h2>ПЪРВО МЯСТО</h2>
                {this.state.isTextVisible
                    ? <Message isVisible={this.state.isTextVisible} />
                    : null}
                <button onClick={this.handleChange}>{this.state.isTextVisible ? "Прочети по-малко" : "Прочети повече"}</button>
            </div>
        )
    }
}

export default ImportantMessage;