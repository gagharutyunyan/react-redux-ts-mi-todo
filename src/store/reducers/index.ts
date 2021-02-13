import { combineReducers } from 'redux';

import { notesReduser } from './notesReduser';

export const rootReducer = combineReducers({
  user: notesReduser,
});

export type RootSTate = ReturnType<typeof rootReducer>;
