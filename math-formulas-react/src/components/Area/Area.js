import React from 'react';
import data from '../../data/data.json';
import Section from '../theory/Section';

class Area extends React.Component {
    constructor() {
        super();
        this.state = {
            infos: []
        }
    }

    componentDidMount() {
        this.setState({
            infos: data
        })
    }
    render() {
        const title = "Area";
        const from = 5;
        const end = 10;
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

export default Area;