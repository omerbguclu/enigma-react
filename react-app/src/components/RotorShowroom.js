import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { turnRotor } from "../store/actions/actionmanager";
import RotorSelectorDropdown from "./RotorSelectorDropdown";

const RotorShowroom = () => {
    let { rotor_store } = useSelector((state) => state);
    let selectedRotors = rotor_store.selectedRotors;
    const dispatch = useDispatch();
    let keyId = 0;

    
    const turnSelectedRotor = (rotor) => {
        rotor.rotorOrder = rotor.rotorOrder.slice(-1) + rotor.rotorOrder.slice(0, -1);
        dispatch(turnRotor());
    };

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Rotor Name</th>
                    <th scope="col">Rotor Order</th>
                    <th scope="col">Model Name</th>
                    <th scope="col">Turn Rotor</th>
                    <th scope="col">Select Rotor</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(selectedRotors).map(rotor => {
                    return <tr key={keyId}>
                    <td>{rotor.rotorName}</td>
                    <td>{rotor.rotorOrder}</td>
                    <td>{rotor.modelName}</td>
                    <td><button className="btn btn-danger" onClick={() => turnSelectedRotor(rotor)}>Turn Rotor</button></td>
                    <td><RotorSelectorDropdown id={keyId++}/></td>
                    </tr>
                    })}
            </tbody>
        </table>
    )
}

export default RotorShowroom;