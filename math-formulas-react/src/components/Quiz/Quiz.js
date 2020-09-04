import React from 'react';
import quiz from '../../data/quiz.json';


class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            answerOne: "",
            quiz: []
        }
        this.OnChange = this.OnChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            quiz: quiz
        })
    }

    OnChange(e) {
        this.setState({
            answerOne: e.target.value
        })
        console.log(this.answerOne);
    }
    render() {
        return (
            <section>
                <h1>Maths Quiz</h1>
                {this.state.quiz.map((value) => {
                    return (
                        <article key={value.id}>
                            <h3 >Question {value.id + 1}</h3>
                            <div >Task: {value.task}</div>
                            <img src={require("../../assests/" + value.src + ".png")} alt="problem" />
                            <label>Write your answer here:</label>
                            <input
                                type="text"
                                value={this.state.answerOne}
                                onClick={this.OnChange} />

                        </article>
                    )
                })}
            </section>

        )
    }
}

export default Quiz;