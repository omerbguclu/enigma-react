import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnRotor } from "../store/actions/actionmanager";
import { keyHandler } from "../store/actions/inputActionManager";

const Rotors = () => {
    const dispatch = useDispatch();
    let { rotor_store } = useSelector((state) => state);
    let selectedRotors = rotor_store.selectedRotors;

    const turnSelectedRotor = (rotor) => {
        rotor.rotorOrder = rotor.rotorOrder.slice(-1) + rotor.rotorOrder.slice(0, -1);
        dispatch(turnRotor());
    };

    const turnBackSelectedRotor = (rotor) => {
        rotor.rotorOrder = rotor.rotorOrder.slice(1) + rotor.rotorOrder.at(0);
        dispatch(turnRotor());
    };

    const characterHandler = (e) => {
        const regex = new RegExp('[a-zA-Z]'); // only allow the wanted characters
        ['Enter', 'Alt', 'Control', 'Shift', ' ', 'Tab', ',', '.'].forEach(x => {
            if (e.key === x) {
                console.log("Unwanted Character: ", x);
                e.preventDefault();
                return;
            }
        });

        if (regex.test(e.key)) { // is regex matched
            if (e.key === 'Backspace') {
                if (document.getElementById("inputTextArea").value !== '') // check is empty
                    turnBackSelectedRotor(selectedRotors[0]);
            }
            else {
                turnSelectedRotor(selectedRotors[0]);
            }
            dispatch(keyHandler(e.key));
        }
    };

    return (
        <textarea onKeyDown={(e) => characterHandler(e)} className="form-control" id="inputTextArea" style={{ textTransform: "uppercase" }} rows="3"></textarea>
    )
}

export default Rotors;