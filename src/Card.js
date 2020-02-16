import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    //Set the rotation and translate of the card
    let rotation = Math.floor(Math.random() * 25);
    rotation *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    let xPos = Math.floor(Math.random() * 25);
    let yPos = Math.floor(Math.random() * 25);
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${rotation}deg)`;
  }

  render() {
    return (
      <div className="card" style={{ transform: this._transform }}>
        <img
          src={this.props.card.images.png}
          alt={`${this.props.card.value} of ${this.props.card.suit}`}
        />
      </div>
    );
  }
}
