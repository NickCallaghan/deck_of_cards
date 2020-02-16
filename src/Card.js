import React, { Component } from "react";
import "./Card.scss";

export default class Card extends Component {
  state = {
    rotation: 0
  };

  randomRotation = () => {
    let rotation = Math.floor(Math.random() * 25);
    rotation *= Math.floor(Math.random() * 2) === 1 ? 1 : -1; // this will add minus sign in 50% of cases
    this.setState({ rotation });
  };

  componentDidMount() {
    this.randomRotation();
  }

  render() {
    let styles = {
      transform: `rotate(${this.state.rotation}deg)`
    };

    return (
      <div className="card" style={styles}>
        <img
          src={this.props.card.images.png}
          alt={`${this.props.card.value} of ${this.props.card.suit}`}
        />
      </div>
    );
  }
}
