import React from 'react';
import data from '../../data/data.json';

class Theory extends React.Component {
    constructor() {
        super();
        this.state = {
            infos: []
            // infos: [{
            //     id: 1,
            //     name: 'Square',
            //     header: `The Perimeter of Square`,
            //     information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
            //     formula: `P = 4 * A`,
            //     explanation: `A is the length of one of the sides.`,
            //     src: `perimeter-square`,
            //     variable: 'Side A: '
            // }, {
            //     id: 2,
            //     name: 'Circle',
            //     header: `The perimeter of Circle`,
            //     information: `Perimeter is a length around the circle. `,
            //     formula: `P = 2 * π * R`,
            //     explanation: `π is constant  equal on 3,1415926535, R is a radius of a circle .`,
            //     src: `perimeter-circle`,
            //     variable: 'Radius R: '
            // }, {
            //     id: 3,
            //     name: 'Triangle',
            //     header: `The Perimeter of Triangle`,
            //     information: `Perimeter is the sum of three sides of triagle.`,
            //     formula: `P = A + B + C`,
            //     explanation: `A, B and C are the length of each of the sides.`,
            //     src: `perimeter-triangle`,
            //     variable: ['Side A: ', 'Side B: ', 'Side C: ']
            // }, {
            //     id: 4,
            //     name: 'Rectangle',
            //     header: `The Perimeter of Rectangle`,
            //     information: `Perimeter is the sum of two times length and two times width. `,
            //     formula: `P = 2 * A + 2 * B `,
            //     explanation: `A is a length and B is a width.`,
            //     src: `perimeter-rectangle`,
            //     variable: ['Side A: ', 'Side B: ']
            // }, {
            //     id: 5,
            //     name: 'Polygon',
            //     header: `The Perimeter of regular Polygon`,
            //     information: `Perimeter is the sum all equal sides of polygon.`,
            //     formula: `P = X * A `,
            //     explanation: `A is a length of one of the sides and X is number of the sides.`,
            //     src: `perimeter-polygon`,
            //     variable: ['Side A: ', 'Number X: ']
            // }, {
            //     id: 6,
            //     name: 'Square',
            //     header: `The Area of Square`,
            //     information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
            //     formula: `Area =  A * A`,
            //     explanation: `A is the length of one of the sides.`,
            //     src: `area-square`,
            //     variable: 'Side A: '

            // }, {
            //     id: 7,
            //     name: 'Circle',
            //     header: `The Area of Circle`,
            //     information: `The area of a circle is encolsed from his perimeter. `,
            //     formula: `Area = π * R * R`,
            //     explanation: `π is constant equal on 3,1415926535, R is a radius of a circle .`,
            //     src: `perimeter-circle`,
            //     variable: 'Riadius R: '

            // }, {
            //     id: 8,
            //     name: 'Triangle',
            //     header: `The Area of Triangle`,
            //     information: `This is a polygon with three vertices and  three edges.`,
            //     formula: `Area = 1/2 * B * H`,
            //     explanation: `B is a length of the base and H is vertical height.`,
            //     src: `area-triangle`,
            //     variable: ['Side B: ', 'Height H: ']
            // }, {
            //     id: 9,
            //     name: 'Rectangle',
            //     header: `The Area of Rectangle`,
            //     information: ` Rectange is a quadrilateral with four right angles `,
            //     formula: `Area = W * H `,
            //     explanation: `W is a width and H is a height.`,
            //     src: `area-rectangle`,
            //     variable: ['Width W: ', 'Height H: ']
            // }, {
            //     id: 10,
            //     name: 'Polygon',
            //     header: `The Area of regular Polygon`,
            //     information: `A regular polygon is a polygon where each of the sides have the same length and also equal angles`,
            //     formula: `Area = 1/2 * P * A `,
            //     explanation: `P is a perimeter and A is for apothem.`,
            //     src: `area-polygon`,
            //     variable: ['Perimeter P: ', 'Apothem A: ']
            // }]
        }
    }
    componentDidMount() {

        fetch(data)
            .then(res => res.json())
            .then(data => {
                this.setState({


                    infos: data.infos


                })

            })
    }

    render() {
        return (
            <section>
                <h1>Theory for square, circle, triangle, rectangle and polygon</h1>
                {this.state.infos.map((value, index) => {
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