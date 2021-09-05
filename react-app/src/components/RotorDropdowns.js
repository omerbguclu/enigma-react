import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedRotor } from "../store/actions/actionmanager";

function Rotors() {
    let { rotors } = useSelector((state) => state);
    let myRotors = {...rotors}.store_rotors.rotors
    let selectedRotor = {...rotors}.store_selected_rotor.selectedRotor
    const dispatch = useDispatch();
    let keyId = 0;
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    return (
    <div>
            <div className="dropdown">
            <button onClick={toggleOpen} className="btn btn-secondary dropdown-toggle"
                    type="button" id="dropdownMenuButton">
                        {selectedRotor.rotorName}
            </button>
            <div className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                    {Object.values(myRotors).map(rotor => {
                        return <button key={keyId++} className="dropdown-item" type="button" onClick={() => {dispatch(changeSelectedRotor(rotor)); toggleOpen();}} >{rotor.rotorName}</button>
                     })}
            </div>
        </div>
     </div>
    )
}

export default Rotors;