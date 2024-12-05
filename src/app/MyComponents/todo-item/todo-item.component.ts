import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}
  
  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo); // using EventEmitter's emit method on todo variable in order to delete it
    console.log("onClick has been triggered");
  }

  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
}
