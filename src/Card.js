import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.card.images.svg}
          alt={`${this.props.card.value} of ${this.props.card.suit}`}
        />
      </div>
    );
  }
}
