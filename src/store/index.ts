import { combineReducers, createStore } from 'redux';
import items from './reducer';

const allReducers = combineReducers({ items });

export const store = createStore(
  allReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export type RootState = ReturnType<typeof allReducers>;
