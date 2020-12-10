import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
    render(){
  return (
    <div class="todo">
    <form> 
        Input your todo item
        <input type="text" name="todo"  placeholder="todo" id="addlist"/>
        <input type="submit" id="add"/>
    </form>

</div>
  );
}
}
export default NewTodo;