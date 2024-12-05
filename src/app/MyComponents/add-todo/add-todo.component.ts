import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: false,
  
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  ngOnInit() {}

  onSubmit() {
  // adding
    const todo = {
      sno: 4,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo); 
  }
}
