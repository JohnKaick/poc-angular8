import { IUser } from './users.model';

export interface IUserState {
    users: IUser[],
}

export const initialUserState: IUserState = {
    users: [{ name: 'test' }]
}