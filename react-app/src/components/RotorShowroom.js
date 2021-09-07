import React from "react";
import { useSelector } from 'react-redux';
import RotorSelectorDropdown from "./RotorSelectorDropdown";

const RotorShowroom = () => {
    let { rotor_store } = useSelector((state) => state);
    let selectedRotors = {...rotor_store}.store_selected_rotor.selectedRotors;
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
                {Object.values(selectedRotors).map(rotor => {
                    return <tr key={keyId}>
                    <td>{rotor.rotorName}</td>
                    <td>{rotor.rotorOrder}</td>
                    <td>{rotor.modelName}</td>
                    <td><RotorSelectorDropdown id={keyId++}/></td>
                    </tr>
                    })}
            </tbody>
        </table>
    )
}

export default RotorShowroom;