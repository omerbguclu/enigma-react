import {createStore, combineReducers} from 'redux';
import CounterReducer from './reducers/counter';
import RotorReducer from './reducers/rotor';

const reducers = combineReducers({
    counter: CounterReducer,
    rotor_store: RotorReducer,
});

const store = createStore(reducers);

export default store;