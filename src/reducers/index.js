
import { combineReducers } from 'redux';

import AuthReducer from './auth/auth-reducer';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;
