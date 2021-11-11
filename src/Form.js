import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      operation: '',
      isValid: null
    }
  }

  handleOperation = evt => {
    this.setState({
      operation: evt.target.value
    })
  }
  
  handleSubmit = evt => {
    const { operation } = this.state
    evt.preventDefault()
    if(operation === ''){
      this.props.handleInvalidInput()
      this.setState({
        isValid: "error"
      })
    } else if(operation === 'sum'){
      this.props.handleSum()
      this.setState({
        isValid: null,
        operation: ''
      })
    } else if (operation === 'average'){
      this.props.handleAverage()
      this.setState({
        isValid: null,
        operation: ''
      })
    } else {
      this.props.handleMode()
      this.setState({
        isValid: null,
        operation: ''
      })
    }
  }
  
  render() {
    const {  operation, isValid } = this.state 
    const { handleNumInput } = this.props

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input className={isValid} id="values" name="values" type="text" value={this.props.numArray} onChange={(evt) => handleNumInput(evt)} />
        <select className={isValid} onChange={this.handleOperation} id="operation" name="operation" value={operation}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      </>
    );
  }
}
export default Form;
