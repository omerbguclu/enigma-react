import { TURN_ROTORS, CHANGE_SELECTED_ROTOR } from "../types/types";

export const turnRotor = (payload) => {
    return {
        type: TURN_ROTORS,
        payload : payload
    }
}

export const changeSelectedRotor = (payload) => {
    return {
        type: CHANGE_SELECTED_ROTOR,
        payload : payload
    }
}