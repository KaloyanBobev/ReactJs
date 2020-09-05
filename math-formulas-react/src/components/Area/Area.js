import React from 'react';
import data from '../../data/data.json'
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
        return (
            <section>
                <h1>Area</h1>
                {this.state.infos.slice(5, 10).map((value) => {
                    return (
                        <article key={value.id}>
                            <h3 >{value.header}</h3>
                            <img src={require("../../assests/" + value.src + ".png")} alt="problem" />
                            <div >Information: {value.information}</div>
                            <div > Formula: {value.formula}</div>
                            <div >Explanation: {value.explanation}</div>
                            <label>{value.variable}</label>
                        </article>
                    )
                })}
            </section>
        )
    }
}

export default Area;