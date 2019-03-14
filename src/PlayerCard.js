import React from 'react';

const scissors = "https://i.imgur.com/pgjyhiZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
  console.log(props.sign);
  return(
    <div className="playerCard">
    <img src={rock}/>
    {props.sign}</div>
  )
};

export default PlayerCard;
