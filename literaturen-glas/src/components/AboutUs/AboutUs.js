import React from 'react';
import center from '../../data/home.json';
class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {
            isTextVisible: false,
            info: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({ info: center })
    }

    handleChange() {
        this.setState(prevState => ({ isTextVisible: !prevState.isTextVisible }))
    }

    render() {
        return (
            <div id="second-article" className="col-md-8 offset-md-2">
                <h2>{this.state.info.centerHeading}</h2>
                <div>{this.state.info.fundationCenter}</div>
                <div>{this.state.info.history}</div>
                {this.state.isTextVisible
                    ? <div>
                        <div>{this.state.info.art}</div>
                        <div>{this.state.info.base}</div></div>
                    : null}
                <a href="#second-article" onClick={this.handleChange}>
                    {this.state.isTextTwoVisible ? "Прочети  по-малко" : "Прочети повече"}</a>
            </div>
        )
    }
}

export default AboutUs;