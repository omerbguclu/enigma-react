import { INCREASE_THE_STATE, DECREASE_THE_STATE, TURN_ROTORS } from "../types/types";

export const increaser = () => {
    return {
        type: INCREASE_THE_STATE,
    }
}

export const decreaser = () => {
    return {
        type: DECREASE_THE_STATE,
    }
}

export const turnRotor = () => {
    return {
        type: TURN_ROTORS,
    }
}