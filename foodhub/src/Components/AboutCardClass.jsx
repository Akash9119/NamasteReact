import React, { Component } from 'react';

export default class AboutCardClass extends Component {
    // We can get the props usign constructor method also or we can just use the props directly
    constructor(props) {
        super(props);

        this.state = {
          first: "First",
          second: "Second",
        }
    }

  render() {
    return (
        <div className="text-xl m-2 border-2 border-black w-fit p-4 rounded-sm bg-slate-200">
        <h1>{this.props.name}</h1>
        <h2>{this.props.location}</h2>
        <h2>{this.props.contact}</h2>
        <p>{this.state.first}</p>
        <p>{this.state.second}</p>
    </div>
    )
  }
}
