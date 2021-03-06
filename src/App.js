import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js';

class Game extends Component {
  constructor(){
    super();
    this.signs = ["rock","scissors","paper"];
    this.state = {
        playerOne: "rock",
        playerTwo: "scissors"
    }
  }

  playGame = () => {  // => because of the arror you do not need ot bind it
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * this.signs.length)],
      playerTwo: this.signs[Math.floor(Math.random() * this.signs.length)]
    })
  }

  decideWinner = () => {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerTwo;

    if(playerOne === playerTwo){
      return "It's a Tie!"
    } else if((playerOne === "rock" && playerTwo === "scissors") ||
              (playerOne === "paper" && playerTwo === "rock") ||
              (playerOne === "scissors" && playerTwo === "paper")){
    return "Player 1 Wins!";
    }else{
    return "Player 2 Wins!";
  }
  }

  render(){
    return(
    <div className="style">
    <div>
    <PlayerCard sign={this.state.playerOne}/>
    <PlayerCard sign={this.state.playerTwo}/>
    </div>
    <div className="winner"> {this.decideWinner}
    </div>
    <button type="button" onClick={this.playGame}>Who is the winner</button>
    </div>
  )
  }
}

export default Game;
