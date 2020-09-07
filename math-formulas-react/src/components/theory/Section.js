import React from 'react';


export default class Section extends React.Component {

    render() {
        return (
            <section>
                <h1>{this.props.title}</h1>
                {this.props.info.map((value) => {
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