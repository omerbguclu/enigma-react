import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedRotor } from "../store/actions/actionmanager";

function RotorSelector(props) {
    let { rotor_store } = useSelector((state) => state);
    let rotors = rotor_store.rotors
    let selectedRotor = { ...rotor_store }.selectedRotors[props.id]
    const dispatch = useDispatch();
    let keyId = 0;
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    const changeSelectedRotorIn = (payload) => {
        rotor_store.selectedRotors[payload.id] = payload.rotor;
        dispatch(changeSelectedRotor(payload));
    }

    return (
        <div>
            <div className="dropdown">
                <button onClick={toggleOpen} className="btn btn-secondary dropdown-toggle"
                    type="button" id="dropdownMenuButton">
                    {selectedRotor.rotorName}
                </button>
                <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    {Object.values(rotors).map(rotor => {
                        let payload =
                        {
                            id: props.id,
                            rotor: rotor
                        }
                        return <button key={keyId++} className="dropdown-item" type="button" onClick={() => { changeSelectedRotorIn(payload); toggleOpen(); }} >{rotor.rotorName}</button>
                    })}
                </div>
            </div>
        </div>
    )
}

export default RotorSelector;