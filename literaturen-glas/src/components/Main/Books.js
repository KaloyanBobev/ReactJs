import React from 'react';
import books from '../../data/books.json';

class Books extends React.Component {
    constructor() {
        super();
        this.state = {
            isReverse: false,
            filtered: [],
            poems: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            poems: books,
        })
    }

    handleChange() {
        this.setState((prevState) => ({
            isReverse: !prevState.isReverse
        }))
    }

    render() {
        return (
            <section>
                <h2 className="">Списък произведения</h2>
                <button onClick={this.handleChange}>{this.state.isReverse ? "покажи най-новите" : "покажи най-старите"}</button>
                <article class="row">
                    <h4 className="col-md-1 offset-md-1">Номер</h4>
                    <h4 className="col-md-2 ">Име на автора</h4>
                    <h4 className="col-md-3">Заглавие</h4>
                    <h4 className="col-md-3">Жанр</h4>
                    <h4 className="col-md-2">Дата на издаване</h4>
                </article>
                {this.state.poems.reverse().map((book) => {
                    return (
                        <article key={book.id} class="row">
                            <div className="col-md-1 offset-md-1">{book.id}</div>
                            <div className="col-md-2 ">{book.author}</div>
                            <div className="col-md-3">{book.name}</div>
                            <div className="col-md-3">{book.species}</div>
                            <div className="col-md-2">{book.date}</div>
                        </article>
                    )
                })}
            </section>
        )
    }
}
export default Books;