import React, { Component } from "react";
import Card from "./Card";
import "./Deck.scss";

export default class Deck extends Component {
  render() {
    return (
      <div className="deck">
        <div className="deck-container">
          {this.props.cards.map(card => (
            <Card card={card} />
          ))}
        </div>
      </div>
    );
  }
}
