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
    }

    render() {
        return (
            <section className="newsparers">
                <button onClick={this.handleChange}>{this.state.isReverse
                    ? "покажи най-новите"
                    : "покажи най-старите"}</button>
                { this.state.news.reverse().map((value) => {
                    return (
                        <article key={value.href} className="row align-items-center">
                            <h2 className="col-md-3">{value.title}</h2>
                            <h3 className="col-md-4">{value.date}</h3>
                            <button className="align-self-center">
                                <a href={require(`../../newspapers/${value.href}`)} rel="noopener noreferrer" target="_blank">
                                    <span role="img" aria-label="book"> &#128214; </span>  Прочети
                                </a>
                            </button>
                            <button className="offset-md-1">
                                <a href={require(`../../newspapers/${value.href}`)} download>
                                    <span role="img" aria-label="download"> &#8681; </span> Свали
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