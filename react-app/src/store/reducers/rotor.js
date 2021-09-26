import { LIST_ROTORS, TURN_ROTORS, CHANGE_SELECTED_ROTOR } from "../types/types";

export const rotors = {
    rotorI: {
        id: 1,
        rotorName: "I",
        rotorOrder: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
        modelName: "Enigma I",
    },
    rotorII: {
        id: 2,
        rotorName: "II",
        rotorOrder: "JDKSIRUXBLHWTMCQGZNPYFVOE",
        modelName: "Enigma I",
    },
    rotorIII: {
        id: 3,
        rotorName: "III",
        rotorOrder: "FHJLCPRTXVZNYEIWGAKMUSQO",
        modelName: "Enigma I",
    },
    rotorIV: {
        id: 4,
        rotorName: "IV",
        rotorOrder: "SOVPZJAYQUIRHXLNFTGKDCMWB",
        modelName: "M3 Army",
    },
    rotorV: {
        id: 5,
        rotorName: "V",
        rotorOrder: "VZBRGITYUPSDNHLXAWMJQOFECK",
        modelName: "M3 Army",
    },
    rotorVI: {
        id: 6,
        rotorName: "VI",
        rotorOrder: "PGVOUMFYQBENHZRDKASXLICTW",
        modelName: "M3 & M4 Naval (FEB 1942)",
    },
    rotorVII: {
        id: 7,
        rotorName: "VII",
        rotorOrder: "JHGRCXMYSWBOUFAIVLPEKQDT",
        modelName: "M3 & M4 Naval (FEB 1942)",
    },
    rotorVIII: {
        id: 8,
        rotorName: "VIII",
        rotorOrder: "HTLXOCBJSPDZRAMEWNIUYGV",
        modelName: "M3 & M4 Naval (FEB 1942)",
    }
}

const selectedRotors = [
    rotors.rotorI,
    rotors.rotorII,
    rotors.rotorIII
]

const store_dictionary = {
    rotors,
    selectedRotors
}

const reducer = (state = store_dictionary, action) => {
    switch (action.type) {
        case LIST_ROTORS:
        case TURN_ROTORS:
        case CHANGE_SELECTED_ROTOR:
        default:
            return { ...state };
    }
}

export default reducer;
