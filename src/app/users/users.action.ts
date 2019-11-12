import { createAction, props } from '@ngrx/store';
import { IUser } from './users.model';

export const add = createAction(
    '[Users Component] Add',
    props<{ payload: IUser }>()
);

