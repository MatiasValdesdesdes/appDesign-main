import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
  standalone: false,
})
export class CalcComponent implements OnInit {
  @Input() title: string = '';
  @Output() dispatchEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() { }

  returnInfo() {
    this.dispatchEvent.emit('Hello from child');
  }

}
