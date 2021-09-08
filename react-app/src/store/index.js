import {createStore, combineReducers} from 'redux';
import RotorReducer from './reducers/rotor';

const reducers = combineReducers({
    rotor_store: RotorReducer,
});

const store = createStore(reducers);

export default store;