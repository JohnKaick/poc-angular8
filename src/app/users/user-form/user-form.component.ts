import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name: string;
  @Output() saved = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.saved.emit(this.name);
  }

}
