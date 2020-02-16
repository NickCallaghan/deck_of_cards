import React, { Component } from "react";
import "./Heading.scss";

export default class Heading extends Component {
  render() {
    return (
      <div>
        <h1 data-heading={this.props.children} className="FancyHeading">
          {this.props.children}
        </h1>
      </div>
    );
  }
}
