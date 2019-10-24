import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})

export class SelectComponent implements OnInit {
  @Input() options;
  @Input() selectedValue; 
  @Output() selectOption = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  onSelectOption(selectedOption){
    this.selectOption.emit(selectedOption)
  }
  
}
