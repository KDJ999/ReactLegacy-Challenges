import React, { Component } from "react";

export default class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    console.log(this.state.img);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          img: data.message,
        });
        console.log(this.state.img);
      });
  }

  render() {
    return (
      <div>
        <h1>Say Hi ... to Dogs!!</h1>
        <button onClick={(e) => this.componentDidMount()}>New Image</button>
        <img src={this.state.img} alt="Cute Dogs!!" />
      </div>
    );
  }
}
