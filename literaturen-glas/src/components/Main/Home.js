import React from 'react';
import center from '../../data/home.json'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            info: ""
        }
    }

    componentDidMount() {
        this.setState({ info: center })

    }
    render() {
        return (
            <article>
                <h1>{this.state.info.mainHeader}</h1>
                <h2>{this.state.info.teacher}</h2>
                <h2>{this.state.info.voice}</h2>
                <h2>{this.state.info.chairman}</h2>
                <div>{this.state.info.firstEdition}</div>
                <div>{this.state.info.fundation}</div>
                <div>{this.state.info.newspaper}</div>
                <div>{this.state.info.contract}</div>
                <h2>{this.state.info.centerHeading}</h2>
                <div>{this.state.info.fundationCenter}</div>
                <div>{this.state.info.history}</div>
                <div>{this.state.info.art}</div>
                <div>{this.state.info.base}</div>
            </article>
        )
    }
}

export default Home;