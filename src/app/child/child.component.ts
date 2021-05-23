import { Component, Input, OnInit } from '@angular/core';
import { InputData } from 'src/Model/Inputdata';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() data:InputData;

  ngOnInit(): void {
  }

}
