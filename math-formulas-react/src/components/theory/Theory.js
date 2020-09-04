import React from 'react';
import data from '../../data/data.json';

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
        return (
            <section>
                <h1>Theory for square, circle, triangle, rectangle and polygon</h1>
                {this.state.infos.map((value) => {
                    return (
                        <article key={value.id}>
                            <h3 >{value.header}</h3>
                            <img src={require("../../assests/" + value.src + ".png")} alt="problem" />
                            <div >Information: {value.information}</div>
                            <div > Formula: {value.formula}</div>
                            <div >Explanation: {value.explanation}</div>
                        </article>
                    )
                })}
            </section>
        )
    }
}

export default Theory;