import {createStore, combineReducers} from 'redux';
import RotorReducer from './reducers/rotor';
import InputReducer from './reducers/input';


const reducers = combineReducers({
    rotor_store: RotorReducer,
    input_store: InputReducer
});

const store = createStore(reducers);

export default store;