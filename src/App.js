import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: null,
      numArray: ''
    }
  }

  handleNumInput = evt => {
    let nums = evt.target.value.split(',')
    this.setState({
      numArray: nums,
    })
  }

  handleInvalidInput = () => {
    this.setState({
      result: "Invalid input."
    })
  }

  handleSum = () => {
    const {numArray} = this.state
    this.setState({
      result: numArray.reduce((a, b) => Number(a) + Number(b)),
      numArray: ''
    })
  }

  handleAverage = () => {
    const {numArray} = this.state
    this.setState({
      result: numArray.reduce((a, b) => Number(a) + Number(b)) / numArray.length,
      numArray: ''
    })
  }

  handleMode = () => {
    const {numArray} = this.state
    let numObj = {}
    let most = 1
    for(let num of numArray){
      if(!numObj[num]){
        numObj[num] = 1
      } else {
        numObj[num] += 1
      }
    }

    for(let num in numObj){
      if(numObj[num] > most){
        most = num
      }
    }

    this.setState({
      result: most,
      numArray: ''
    })
  }

  render() {
    console.log(this.state.numArray)
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form 
        handleNumInput={this.handleNumInput} 
        handleInvalidInput={this.handleInvalidInput}
        handleAverage={this.handleAverage}
        handleSum={this.handleSum}
        handleMode={this.handleMode}
        numArray={this.state.numArray}
        />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
