import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squere',
  templateUrl: './squere.component.html',
  styleUrls: ['./squere.component.css']
})
export class SquereComponent implements OnInit {

  @Input() value!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
