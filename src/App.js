import React, { Component } from "react";
import axios from "axios";
import Deck from "./Deck";
import Heading from "./Heading";

// CSS Dependencies
import "./App.scss";

export default class App extends Component {
  state = {
    deck: {},
    cardsDrawn: []
  };

  getNewDeck = async () => {
    // Fetch new deck
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle";
    const response = await axios.get(url);
    const deck = await response.data;
    this.setState({
      deck,
      cardsDrawn: []
    });
  };

  updateDeck = async deckId => {
    // Update deck to state
    const url = `https://deckofcardsapi.com/api/deck/${deckId}`;
    const response = await axios.get(url);
    const deck = await response.data;
    this.setState({ deck });
  };

  async componentDidMount() {
    // Fetch new deck of cards on load and save to state
    this.getNewDeck();
  }

  drawCard = async () => {
    // Draw a new card from the current deck
    const url = `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`;
    const resp = await axios.get(url);
    const data = await resp.data;
    this.setState(st => ({
      cardsDrawn: [...st.cardsDrawn, ...data.cards]
    }));
    this.updateDeck(this.state.deck.deck_id);
  };

  render() {
    return (
      <div className="App">
        <Heading>Pick a card</Heading>
        <div className="buttonContainer">
          <button className="appButton" onClick={this.getNewDeck}>
            Get New Deck
          </button>
          <button className="appButton" onClick={this.drawCard}>
            Draw Card
          </button>
        </div>
        <Deck cards={this.state.cardsDrawn} />
      </div>
    );
  }
}
