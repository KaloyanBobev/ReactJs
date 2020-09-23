import React from 'react';
import books from '../../data/books.json';


class Books extends React.Component {
    constructor() {
        super();
        this.state = {
            isReverse: false,
            tracked: "",
            poems: []
        }
        this.filterHadler = this.filterHadler.bind(this);
    }

    componentDidMount() {
        this.setState({
            poems: books,
        })
    }

    filterHadler(e) {
        this.setState({
            tracked: e.target.value
        })
    }

    render() {
        return (
            <section>
                <h2 className="">Списък произведения</h2>
                <input
                    placeholder="Избери име на автор"
                    value={this.state.tracked}
                    onChange={this.filterHadler}
                />
                <article className="row">

                    <h4 className="col-md-2 offset-md-1">Име на автора</h4>
                    <h4 className="col-md-3">Заглавие</h4>
                    <h4 className="col-md-3">Жанр</h4>
                    <h4 className="col-md-2">Дата на издаване</h4>
                </article>
                {this.state.poems.filter(name => name.author.toLocaleLowerCase().includes(this.state.tracked)).map((book) => {
                    return (
                        <article key={book.id} className="row">

                            <div className="col-md-2 offset-md-1">{book.author}</div>
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