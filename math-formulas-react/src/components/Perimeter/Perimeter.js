import React from 'react';
import data from '../../data/data.json';
import Information from './Information';

class Perimeter extends React.Component {
    constructor() {
        super();
        this.state = {
            sideRectangleA: '',
            radiusR: '',
            sideA: '',
            sideB: '',
            sideC: '',
            sideRectA: '',
            sideRectB: '',
            sidePolygon: '',
            numberX: '',
            infos: data
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const title = "Perimeter";
        const array = [0, 1, 2, 3, 4];
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
                        : this.state.sideRectangleA * 4}</div>
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
                        : (this.state.radiusR * 3.1415926535 * 2).toPrecision(10)}</div>
                </article>
                <article >
                    <Information
                        number={array[2]}
                        info={this.state.infos}
                    />
                    <label>{this.state.infos[array[2]].variable[0]}</label>
                    <input
                        type="text"
                        name="sideA"
                        value={this.state.sideA}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>{this.state.infos[array[2]].variable[1]}</label>
                    <input
                        type="text"
                        name="sideB"
                        value={this.state.sideB}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>{this.state.infos[array[2]].variable[2]}</label>
                    <input
                        type="text"
                        name="sideC"
                        value={this.state.sideC}
                        onChange={this.handleChange}
                    />
                    <div>Result: {this.state.sideC === '' ?
                        null :
                        (this.state.sideA * 1 + this.state.sideB * 1 + this.state.sideC * 1)}</div>
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
                        (this.state.sideRectA * 2 + this.state.sideRectB * 2)}</div>
                </article>
                <article >
                    <Information
                        number={array[4]}
                        info={this.state.infos}
                    />
                    <label>{this.state.infos[array[4]].variable[0]}</label>
                    <input
                        type="text"
                        name="sidePolygon"
                        value={this.state.sidePolygon}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>{this.state.infos[array[4]].variable[1]}</label>
                    <input
                        type="text"
                        name="numberX"
                        value={this.state.numberX}
                        onChange={this.handleChange}
                    />
                    <div>Result: {this.state.numberX === ''
                        ? null :
                        (this.state.sidePolygon * this.state.numberX)}</div>
                </article>
                )
            </section>
        )
    }
}

export default Perimeter;