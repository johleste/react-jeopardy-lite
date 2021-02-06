import { render } from '@testing-library/react';
import React from 'react';









function Score(props) {
   

    return (

        <div className="JeopardyDiv">
        <div className="CategoryDiv"><h1>{props.category}</h1>
        </div>
        <div className="QuestionDiv"><h2>{props.question}</h2></div>
        <div className="AnswerDiv">
            <form onSubmit={props.updateScore}>
                <label htmlFor="Enter Answer">Enter Answer:</label>
                <input type="text" name="" onChange={props.handleChange} value={props.answer} />
                <button>Submit</button>
            </form></div>
        <div className="ScoreDiv"><h4>Score:{props.score}</h4></div>
        </div>
    )

    }




export default Score;