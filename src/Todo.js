import logo from './logo.svg';
import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render(){
  return (
    <div id="list">
        <h1 id="listh">Your ToDO List</h1>
        <ul id="tlist">
        </ul>
        <button className="button">delete</button>
        <input type ="checkbox" name="check" className="checked"></input>
    </div>

  );
}
}
export default Todo;