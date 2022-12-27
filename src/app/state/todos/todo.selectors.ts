import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.reducer';

export const selectTodos = (state: AppState) => state.todosKonj;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);
