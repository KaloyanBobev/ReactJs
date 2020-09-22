import React from 'react';
import './newspapers.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import newspapers from '../../data/newspaper.json';

class Newspapers extends React.Component {
    constructor() {
        super();
        this.state = {
            isReverse: false,
            news: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            news: newspapers
        })
    }

    handleChange() {
        this.setState(prevState => ({
            isReverse: !prevState.isReverse
        }));
        console.log(this.state.isReverse);
    }

    render() {
        return (
            <section className="newsparers">
                <button onClick={this.handleChange}>{this.state.isReverse ? "Най-нови" : "Най-стари"}</button>
                { this.state.news.reverse().map((value) => {
                    return (
                        <article key={value.href} className="row align-items-center">
                            <h2 className="col-md-3">{value.title}</h2>
                            <h3 className="col-md-4">{value.date}</h3>
                            <button className="align-self-center">
                                <a href={require(`../../newspapers/${value.href}`)} rel="noopener noreferrer" target="_blank">
                                    &#xe043;   Прочети
                                </a>
                            </button>
                            <button className="offset-md-1">
                                <a href={require(`../../newspapers/${value.href}`)} download>
                                    &#xe118; Свали
                            </a>
                            </button>
                        </article>
                    )
                })}
            </section>
        )
    }
}
export default Newspapers;