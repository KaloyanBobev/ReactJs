import React from 'react';
import './Footer.scss';
class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            date: ""
        }
    }

    componentDidMount() {
        const nowDate = new Date().getFullYear();
        this.setState({
            date: nowDate
        })
    }

    render() {
        return (
            <div id="footer">
                Всички права запазени. CopyRight &#9400; година: 2015-{this.state.date}
            </div>
        )
    }
}

export default Footer;