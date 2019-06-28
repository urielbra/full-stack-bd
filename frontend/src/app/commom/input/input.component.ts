import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nice-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeh : string;
  @Input() type: string;
  @Output() textOutput = new EventEmitter();
            text;

  constructor() { }

  ngOnInit() {

  }

  modeler(){
    this.textOutput.emit(this.text);
  }

}
