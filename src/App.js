import React, { Component } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import Deck from "./Deck";

// CSS Dependencies
import "./App.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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
        <h1>App</h1>
        <div className="buttonContainer">
          <Button
            className="deckButton"
            label="Get New Deck"
            onClick={this.getNewDeck}
          />
          <Button
            className="deckButton"
            label="Draw Card"
            onClick={this.drawCard}
          />
        </div>
        <Deck cards={this.state.cardsDrawn} />
      </div>
    );
  }
}
