import { createReducer, Action, on } from '@ngrx/store';
import { add } from './users.action';
import { initialUserState, IUserState } from './users.state';

const reducer = createReducer(
    initialUserState,
    on(
        add, (state, { payload }) => {
            return { users: [...state.users, payload] }
        }
    )
)

export function userReducer(state: IUserState | undefined, action: Action) {
    return reducer(state, action);
}