import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IUserState } from './users.state';
import { IUser } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<any>;
  users: IUser[];

  constructor(private store: Store<IUserState>) {
    //console.log('users$', store.pipe(select('user')));
    this.users$ = this.store.select<IUserState>(state => state);
    this.users$.subscribe(result => {
      const userList = result.user.users
      this.users = userList
    });
  }

  ngOnInit() {
  }

  /*
  onSave(name: string) {
    this.users$.push({
      name,
    });
  }
  */

}
