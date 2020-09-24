import React from 'react';

class Book extends React.Component {


    render() {
        return (
            <div>
                <article className="row">
                    <h3 className="col-md-3 ">Име на автора</h3>
                    <h3 className="col-md-3">Заглавие</h3>
                    <h3 className="col-md-3">Жанр</h3>
                    <h3 className="col-md-3">Дата на издаване</h3>
                </article>
                {
                    this.props.poems.filter(name => name.author.toLocaleLowerCase().includes(this.props.tracked.toLocaleLowerCase())).map((book) => {
                        return (
                            <article key={book.id} className="row">
                                <div className="col-md-3 ">{book.author}</div>
                                <div className="col-md-3">{book.name}</div>
                                <div className="col-md-3">{book.species}</div>
                                <div className="col-md-3">{book.date}</div>
                            </article>
                        )
                    })
                }
            </div>
        )
    }
}

export default Book;