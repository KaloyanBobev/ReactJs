import React from 'react';

import newspapers from '../../data/newspaper.json';

class Newspapers extends React.Component {
    constructor() {
        super();
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        this.setState({
            news: newspapers
        })
    }

    render() {
        return (
            <section>
                {this.state.news.reverse().map((value) => {
                    return (
                        <article key={value.href}>
                            <h2>{value.title}</h2>
                            <h3>{value.date}</h3>
                            <button>
                                <a href={require(`../../newspapers/${value.href}`)} rel="noopener noreferrer" target="_blank">
                                    <span class="glyphicon glyphicon-file"></span>Прочети
                                    </a>
                            </button>


                            <button>
                                <a href={require(`../../newspapers/${value.href}`)} download>
                                    <span class="glyphicon glyphicon-download-alt"></span> Свали
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