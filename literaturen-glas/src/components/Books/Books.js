import React from 'react';
import books from '../../data/books.json';
import './Books.scss';
import Book from './Book';

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
            <section id="books">
                <h1 className="center">Списък произведения</h1>
                <label>Сортирай по име на автор:

                </label>
                <input
                    placeholder=""
                    value={this.state.tracked}
                    onChange={this.filterHadler}
                />
                <Book poems={this.state.poems} tracked={this.state.tracked} />
            </section>
        )
    }
}
export default Books;