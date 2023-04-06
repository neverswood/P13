import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/AuthenticationSlice';
import userReducer from './features/UserSlice';

export type State = {
  authentication: {
    token: string;
    check: string;
  };
  user: {
    firstName: string;
    lastName: string;
  };
};

export type ReduxAction<T, P> = { type: T; payload: P };

export type Dispatch =
  | ReduxAction<string, any>
  | Promise<any>
  | ((
      dispatch: Dispatch,
      getState: GetState
    ) => ReduxAction<string, any> | Promise<any>);

export type GetState = () => State;

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type DispatchBoundFn<P> = (dispatch: Dispatch, getState: GetState) => P;
