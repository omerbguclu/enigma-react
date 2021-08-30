import {createStore, combineReducers} from 'redux';
import CounterReducer from './reducers/counter';
import RotorReducer from './reducers/rotor';

const reducers = combineReducers({
    counter: CounterReducer,
    rotors: RotorReducer,
});

const store = createStore(reducers);

export default store;