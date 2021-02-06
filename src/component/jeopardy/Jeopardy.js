import React, { Component, useDebugValue } from 'react';
//import our service
import JeopardyService from '../jeopardyService';
import Score from '../Score';
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: " "
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  updateScore = (event) => {
    event.preventDefault();
    let dataAnswer = this.state.data.answer.toLowerCase();
    let userAnswer = this.state.answer.toLowerCase();

    if (dataAnswer === userAnswer) {
      this.setState((state, props) => ({
        score: state.score + state.data.value,
        answer: ""
      }))
      this.getNewQuestion()

    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value,
        answer: ""
      }))
      this.getNewQuestion()

    }
  }

  handleChange = (event) => {

    this.setState({ answer: event.target.value })
  }


  //display the results on the screen
  render() {
    
    return (
      <div>
        <Score question={this.state.data.question} category={this.state.data.title} value={this.state.data.value} score={this.state.score}
          userAnswer={this.state.userAnswer} handleChange={this.handleChange} updateScore={this.updateScore}
        />
      </div>
    )
  }
}

export default Jeopardy;
