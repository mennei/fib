import React, {Component} from 'react';
import './FibComponent.css';
import axios from '../axios';
import {resolve} from 'url';

class FibComponent extends Component {
  state = {
    input: 0,
    result: 0,
  };

  inputOnChangeHandler = event => {
    this.setState ({input: event.target.value});
  };

  sendOnClickHandle = () => {
    const config = {
      headers: {'Access-Control-Allow-Origin': '*'},
    };
    axios
      .get (`/fib/calc?n=${this.state.input}`, config)
      .then (response => {
        console.log (response);
        this.setState ({result: response.data});
      })
      .catch (error => console.log (error));
  };

  textareaOnChangeHandler = event => {
    this.setState ({result: event.target.value});
  };

  render () {
    return (
      <div className="Fib">
        <div><h1>Type number for Fibonacci calculation here:</h1></div>
        <div><input type="text" onChange={this.inputOnChangeHandler} /></div>
        <div><button onClick={this.sendOnClickHandle}>send</button></div>
        <div><h1>Results are here:</h1></div>
        <div>
          <textarea
            col="5"
            row="5"
            value={this.state.result}
            onChange={this.textareaOnChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default FibComponent;
