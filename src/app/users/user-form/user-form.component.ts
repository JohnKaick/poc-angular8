import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserState } from '../users.state';
import { add } from '../users.action';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name: string;
  @Output() saved = new EventEmitter<string>();

  constructor(private store: Store<IUserState>) { }

  ngOnInit() {
  }

  save() {
    this.store.dispatch(add({ payload: { name: this.name } }))
  }

  /*
  save() {
    this.saved.emit(this.name);
  }
  */

}
