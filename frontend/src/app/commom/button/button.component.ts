import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nice-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() placeh;
  @Input () canClick ;
  @Input () goClick;
  enabledGreen: '#02820d';
  disabled: '#666666';

  constructor() {
   }

  ngOnInit() {
    this.canClick = false;
  }

}
