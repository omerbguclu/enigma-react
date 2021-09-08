import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { turnRotor } from "../store/actions/actionmanager";
import RotorSelectorDropdown from "./RotorSelectorDropdown";

const RotorShowroom = () => {
    let { rotor_store } = useSelector((state) => state);
    let selectedRotors = {...rotor_store}.store_selected_rotor.selectedRotors;
    const dispatch = useDispatch();
    let keyId = 0;

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
                    <td><button className="btn btn-danger" onClick={() => dispatch(turnRotor(rotor))}>Turn Rotor</button></td>
                    <td><RotorSelectorDropdown id={keyId++}/></td>
                    </tr>
                    })}
            </tbody>
        </table>
    )
}

export default RotorShowroom;