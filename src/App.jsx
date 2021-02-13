import React, { Component } from "react";
import "./App.css";
import Box from "./components/Box"

class App extends Component {
  constructor(props) {
    super(props);
  

  const boxNames = [
    {
      content: 'Iron Man',
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content:'Black Widow', 
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content: 'Captain America',
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content: 'Black Panther',
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content: 'Red Witch',
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content: 'Falcon',
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    }, 
    {
      content: 'Spiderman', 
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content: 'Hulk', 
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content: 'Captain Marvel',
      hasClicked: false,
      color:`rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    },
    {
      content: 'Doctor Strange',
      hasClicked: false,
      color: `rgb(${this.Colors()}, ${this.Colors()}, ${this.Colors()})`
    
    }
  ]
console.log(boxNames)

  this.state = {
    boxNames
  }
}
  Colors() {
    let rgb = Math.floor(Math.random * 255) + 1;
    return rgb
  }
  

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: Memory Game Project</h1>

        <div>
          {this.state.boxNames.map((box) => {
            <Box background-color={box.color} content={box.content} />
            console.log(box.color)
          })}
        </div>
         
      </main>
    );
    
  

}
}

export default App;
