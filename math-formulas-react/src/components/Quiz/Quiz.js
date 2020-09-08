import React from 'react';
import quiz from '../../data/quiz.json';
import Question from './Question';

class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            quiz: quiz
        }
        this.handleChange = this.handleChange.bind(this);
        this.CheckResult = this.CheckResult.bind(this);
    }

    CheckResult(num, a) {
        if (this.state.quiz[num].answer === a) {
            return <span className="right"> This is the right answer</span>
        } else {
            return <span className="wrong"> Wrong answer</span>
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })

    }
    render() {
        const title = "Maths Quiz";

        return (
            <section>
                <h1>{title}</h1>
                <article>
                    <Question
                        number={0}
                        infos={this.state.quiz} />
                    <label>Write your answer here:</label>
                    <input
                        type="text"
                        name={"answer1"}
                        value={this.state.answer1}
                        onChange={this.handleChange} />
                    {this.CheckResult(0, this.state.answer1)}
                </article>
                <article>
                    <Question
                        number={1}
                        infos={this.state.quiz} />
                    <label>Write your answer here:</label>
                    <input
                        type="text"
                        name={"answer2"}
                        value={this.state.answer2}
                        onChange={this.handleChange} />
                    {this.CheckResult(1, this.state.answer2)}
                </article>
                <article>
                    <Question
                        number={2}
                        infos={this.state.quiz} />
                    <label>Write your answer here:</label>
                    <input
                        type="text"
                        name={"answer3"}
                        value={this.state.answer3}
                        onChange={this.handleChange} />
                    {this.CheckResult(2, this.state.answer3)}
                </article>
                <article>
                    <Question
                        number={3}
                        infos={this.state.quiz} />
                    <label>Write your answer here:</label>
                    <input
                        type="text"
                        name={"answer4"}
                        value={this.state.answer4}
                        onChange={this.handleChange} />
                    {this.CheckResult(3, this.state.answer4)}
                </article>
                <article>
                    <Question
                        number={4}
                        infos={this.state.quiz} />
                    <label>Write your answer here:</label>
                    <input
                        type="text"
                        name={"answer5"}
                        value={this.state.answer5}
                        onChange={this.handleChange} />
                    {this.CheckResult(4, this.state.answer5)}
                </article>
            </section>

        )
    }
}

export default Quiz;