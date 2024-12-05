/* This file contains the typescript code for using app.component.html page of <app-root> used in index.html. Basically ts file of app module tells us how this component will work */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo-list';

  constructor(){
    // setTimeout(() => {
    //   this.title = "Changed Title";
    // }, 2000);
  }
}
