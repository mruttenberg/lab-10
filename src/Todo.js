import logo from './logo.svg';
import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props); 
    
  }
  componentDidMount(){
    //make initial ajax call to list todos 
  }
    render(){
  return (
    <div id={this.props.id}>
    <div id="list">
        <h1 id="listh">Your ToDO List</h1>
        <ul id="tlist">
        </ul>
        <button className="button">delete</button>
        <input type ="checkbox" name="check" className="checked"></input>
        <p>{this.props.text}</p>
    </div>
    </div>

  );
}
}
export default Todo;