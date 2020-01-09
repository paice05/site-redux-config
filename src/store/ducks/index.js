import { combineReducers } from "redux";

import { reducerUser } from './user'

const rootReducers = combineReducers({
  user: reducerUser
});

export default rootReducers;
