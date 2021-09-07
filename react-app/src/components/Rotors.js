import React from "react";
import { useSelector } from 'react-redux';

function Rotors() {
    let { rotor_store } = useSelector((state) => state);
    let rotors = {...rotor_store}.store_rotors.rotors
    let keyId = 0;
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Rotor Name</th>
                    <th scope="col">Rotor Order</th>
                    <th scope="col">Model Name</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(rotors).map(rotor => {
                    const { rotorName, rotorOrder, modelName } = rotor;
                    return <tr key={keyId++}>
                        <td>{rotorName}</td>
                        <td>{rotorOrder}</td>
                        <td>{modelName}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Rotors;