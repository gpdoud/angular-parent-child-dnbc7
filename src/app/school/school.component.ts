import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  @Input() school;
  
  constructor() { }

  ngOnInit() {
  }

}
