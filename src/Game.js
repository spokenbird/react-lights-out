import React, { Component } from 'react'
import Board from "./Board"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt, mode) {
    evt.preventDefault();
    this.setState({
      mode
    })
  }


  render() {
    return (<div >
      <h1> Choose Your Difficulty</h1>
      <button className="btn btn-outline-success mx-1" onClick={(e) => { this.handleClick(e, 'easy') }}>Easy</button>
      <button className="btn btn-outline-warning mx-1" onClick={(e) => { this.handleClick(e, 'medium') }}>Medium</button>
      <button className="btn btn-outline-danger mx-1"onClick={(e) => { this.handleClick(e, 'hard') }}>Hard</button>
      {this.state.mode === 'easy' ? < Board nrows={4} ncols={4} numClicks={4} /> : null}
      {this.state.mode === 'medium' ? < Board nrows={5} ncols={5} numClicks={5} /> : null}
      {this.state.mode === 'hard' ? < Board nrows={5} ncols={5} numClicks={7} /> : null}
    </div >
    )
  }
}

export default Game