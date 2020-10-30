import React from 'react';
import './Footer.scss';
import { withTranslation } from 'react-i18next';

class LegacyComponentClass extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <div id="footer">
                {t('footerPage.1')} {this.props.currentYear}
            </div>
        )
    }
}

const MyComponent = withTranslation()(LegacyComponentClass);

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

            <MyComponent currentYear={this.state.date} />
            // <div id="footer">

            //     Всички права запазени. CopyRight &#9400; година: 2015-{this.state.date}
            // </div>
        )
    }
}

export default Footer;