import React, { Component } from 'react';
import jeopardy from './Scoreboard'


class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            answer: this.answer
        }
    }
    handleAnswer = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true

        })

    }

    render() {
        if (this.state.submitted === this.state.answer) {
            return (
                <div className="AnswerDiv">
                    [Jeopardy.question]
                </div>

            )
        }

        return (
            <div className="AnswerDiv">
                <form onSubmit={this.handleAnswer}>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text"
                            name="Answer"
                            value={this.state.formData.Answer}
                        />
                    </div>
                    <button>Submit Answer</button>


                </form>
            </div>
        )



    }


}

export default Answer;