import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  isHovered = false;
  isEditting = false;
  constructor() { }

  ngOnInit() {
  }

}
