import React from "react";
import {useDispatch} from 'react-redux';
import {increaser, decreaser, turnRotor} from '../store/actions/actionmanager'

function Buttons() {
    const dispatch = useDispatch();
    return (
        <div>
            <button className="btn btn-danger" onClick={() => dispatch(turnRotor())}>Turn Rotor</button>
            <button className="btn btn-danger" onClick={() => dispatch(increaser())}>+</button>
            <button className="btn btn-danger" onClick={() => dispatch(decreaser())}>-</button>
        </div >
    )
}

export default Buttons;