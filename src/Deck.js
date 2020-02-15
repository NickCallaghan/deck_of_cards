import React, { Component } from "react";
import Card from "./Card";

export default class Deck extends Component {
  render() {
    return (
      <div className="deck">
        <p>Deck Component</p>
        {this.props.cards.map(card => (
          <Card card={card} />
        ))}
      </div>
    );
  }
}
