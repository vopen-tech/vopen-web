import { combineReducers } from 'redux'
import session from './session';
// import notifications from './notifications';

const reducers = combineReducers({
    session,
    // notifications
})

export default reducers;