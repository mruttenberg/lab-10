import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
 import NewTodo from './NewTodo';


class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      todos: [],
      somethingElse: ''
    }
  }
  render(){
    return(
      <section id="hey">
         { <NewTodo/> }
        { <Todo id="123" text="sample"/> }
       
      
<div id="todo">
<div class= "entirelist">
    <div className="header">
        <h1>AWESOME TO DO LIST </h1>
    </div>
</div>
</div>
</section>
    );
  }
  }
export default App;