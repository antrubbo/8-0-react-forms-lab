import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      numArray: [],
      operation: '',
      result: null,
      isValid: null
    }
  }

  handleNumInput = evt => {
    let nums = evt.target.value.split(',')
    this.setState({
      numArray: nums,
    })
  }

  handleOperation = evt => {
    this.setState({
      operation: evt.target.value
    })
  }
  
  handleSubmit = evt => {
    const { numArray, operation } = this.state
    evt.preventDefault()
    if(operation === ''){
      this.setState({
        result: "Invalid input.",
        isValid: "error"
      })
    } else if(operation === 'sum'){
      this.setState({
        result: numArray.reduce((a, b) => Number(a) + Number(b)),
        isValid: null,
        numArray: [],
        operation: ''
      })
    } else if (operation === 'average'){
      this.setState({
        result: numArray.reduce((a, b) => Number(a) + Number(b)) / numArray.length,
        isValid: null,
        numArray: [],
        operation: ''
      })
    } else {
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
        isValid: null,
        numArray: [],
        operation: ''
      })
    }
  }
  
  render() {
    const { numArray, operation, result, isValid } = this.state 
    console.log(numArray, operation, result)

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input className={isValid} id="values" name="values" type="text" onChange={this.handleNumInput} value={numArray}/>
        <select className={isValid} onChange={this.handleOperation} id="operation" name="operation" value={operation}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <p id="result">{this.state.result}</p>
      </>
    );
  }
}

export default Form;
