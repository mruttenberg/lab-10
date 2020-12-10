import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
 import NewTodo from './NewTodo';


class App extends Component {
  render(){
    return(
      <section id="list">
         { <NewTodo/> }
        { <Todo/> }
       
      
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