import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  standalone: false,
  
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  localItem: string | null;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    // logic for deleting an element from array
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // storing data in local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  } 
  addToDo(todo: Todo){
    console.log(todo);
    // logic for adding/pushing an element in array
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo){
    console.log(todo);
    // logic for striking through element of array
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
