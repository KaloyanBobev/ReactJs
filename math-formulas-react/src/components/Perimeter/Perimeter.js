import React from 'react';
import data from '../../data/data.json';
import Section from '../theory/Section';

class Perimeter extends React.Component {
    constructor() {
        super();
        this.state = {
            infos: []
        }
    }

    componentDidMount() {
        this.setState({ infos: data })
    }

    render() {
        const title = "Perimeter";
        const from = 0;
        const end = 5;
        return (
            <Section
                title={title}
                info={this.state.infos}
                isShow={true}
                from={from}
                end={end} />
        )
    }
}

export default Perimeter;