import React from "react";
import { useSelector } from 'react-redux';
import RotorDropdowns from "./RotorDropdowns";

function SelectedRotors() {
    let { rotors } = useSelector((state) => state);
    let rotor = {...rotors}.store_selected_rotor.selectedRotor;
    let keyId = 0;
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Rotor Name</th>
                    <th scope="col">Rotor Order</th>
                    <th scope="col">Model Name</th>
                    <th scope="col">Select Rotor</th>
                </tr>
            </thead>
            <tbody>
                <tr key={keyId++}>
                    <td>{rotor.rotorName}</td>
                    <td>{rotor.rotorOrder}</td>
                    <td>{rotor.modelName}</td>
                    <td><RotorDropdowns/></td>
                </tr>
            </tbody>
        </table>
    )
}

export default SelectedRotors;