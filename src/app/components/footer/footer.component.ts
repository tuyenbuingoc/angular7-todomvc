import { Component, OnInit } from '@angular/core';
import { FilterButton, Filter } from 'src/app/models/filterring.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filterButtons: FilterButton[] = [
    {type: Filter.All, label: 'All', isActive: true},
    {type: Filter.Active, label: 'Active', isActive: false},
    {type: Filter.Completed, label: 'Completed', isActive: false}
  ];

  length = 0;
  constructor(private todoService: TodoService) { }
  ngOnInit() {
  }

}
