import React from 'react';
import data from '../../data/data.json';
import Information from '../Perimeter/Information';

class Area extends React.Component {
    constructor() {
        super();
        this.state = {
            sideRectangleA: '',
            radiusR: '',
            sideB: '',
            hightH: '',
            sideRectA: '',
            sideRectB: '',
            parameter: '',
            apothem: '',
            infos: data
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }


    render() {
        const title = "Area";
        const array = [5, 6, 7, 8, 9, 10];
        return (
            <section>
                <h1>{title}</h1>
                <article>
                    <Information
                        number={array[0]}
                        info={this.state.infos}
                    />
                    <label>{this.state.infos[array[0]].variable}</label>
                    <input
                        type="text"
                        name="sideRectangleA"
                        value={this.state.sideRectangleA}
                        onChange={this.handleChange}
                    />
                    <div>Result: {this.state.sideRectangleA === ''
                        ? null
                        : this.state.sideRectangleA * this.state.sideRectangleA}</div>
                </article>
                <article >
                    <Information
                        number={array[1]}
                        info={this.state.infos}
                    />
                    <label>{this.state.infos[array[1]].variable}</label>
                    <input
                        type="text"
                        name="radiusR"
                        value={this.state.radiusR}
                        onChange={this.handleChange}
                    />
                    <div>Result: {this.state.radiusR === ''
                        ? null
                        : (this.state.radiusR * 3.1415926535 * this.state.radiusR).toPrecision(10)}</div>
                </article>
                <article >
                    <Information
                        number={array[2]}
                        info={this.state.infos}
                    />

                    <label>{this.state.infos[array[2]].variable[0]}</label>
                    <input
                        type="text"
                        name="sideB"
                        value={this.state.sideB}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>{this.state.infos[array[2]].variable[1]}</label>
                    <input
                        type="text"
                        name="hightH"
                        value={this.state.hightH}
                        onChange={this.handleChange}
                    />
                    <div>Result: {this.state.hightH === '' ?
                        null :
                        (this.state.sideB * this.state.hightH * 0.5)}</div>
                </article>
                <article >
                    <Information
                        number={array[3]}
                        info={this.state.infos}
                    />
                    <label>{this.state.infos[array[3]].variable[0]}</label>
                    <input
                        type="text"
                        name="sideRectA"
                        value={this.state.sideRectA}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>{this.state.infos[array[3]].variable[1]}</label>
                    <input
                        type="text"
                        name="sideRectB"
                        value={this.state.sideRectB}
                        onChange={this.handleChange}
                    />
                    <div>Result: {this.state.sideRectB === '' ?
                        null :
                        (this.state.sideRectA * this.state.sideRectB)}</div>
                </article>
                <article >
                    <Information
                        number={array[4]}
                        info={this.state.infos}
                    />
                    <label>{this.state.infos[array[4]].variable[0]}</label>
                    <input
                        type="text"
                        name="parameter"
                        value={this.state.parameter}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>{this.state.infos[array[4]].variable[1]}</label>
                    <input
                        type="text"
                        name="apothem"
                        value={this.state.apothem}
                        onChange={this.handleChange}
                    />
                    <div>Result: {this.state.numberX === ''
                        ? null :
                        (this.state.parameter * this.state.apothem * 0.5)}</div>
                </article>
                )
            </section>
        )
    }
}

export default Area;