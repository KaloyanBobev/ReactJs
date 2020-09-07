import React from 'react';
import data from '../../data/data.json';
import Section from './Section';
class Theory extends React.Component {
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
        const title = "Theory for square, circle, triangle, rectangle and polygon";
        return (
            <Section
                title={title}
                info={this.state.infos}
                isShow={false}
            />
        )
    }
}

export default Theory;