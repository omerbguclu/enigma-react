import { LIST_ROTORS, TURN_ROTORS, CHANGE_SELECTED_ROTOR } from "../types/types";

const store_rotors = {
    rotors: {
        rotorI: {
            rotorName: "I",
            rotorOrder: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
            modelName: "Enigma I",
        },
        rotorII: {
            rotorName: "II",
            rotorOrder: "JDKSIRUXBLHWTMCQGZNPYFVOE",
            modelName: "Enigma I",
        },
        rotorIII: {
            rotorName: "III",
            rotorOrder: "FHJLCPRTXVZNYEIWGAKMUSQO",
            modelName: "Enigma I",
        },
        rotorIV: {
            rotorName: "IV",
            rotorOrder: "SOVPZJAYQUIRHXLNFTGKDCMWB",
            modelName: "M3 Army",
        },
        rotorV: {
            rotorName: "V",
            rotorOrder: "VZBRGITYUPSDNHLXAWMJQOFECK",
            modelName: "M3 Army",
        },
        rotorVI: {
            rotorName: "VI",
            rotorOrder: "PGVOUMFYQBENHZRDKASXLICTW",
            modelName: "M3 & M4 Naval (FEB 1942)",
        },
        rotorVII: {
            rotorName: "VII",
            rotorOrder: "JHGRCXMYSWBOUFAIVLPEKQDT",
            modelName: "M3 & M4 Naval (FEB 1942)",
        },
        rotorVIII: {
            rotorName: "VIII",
            rotorOrder: "HTLXOCBJSPDZRAMEWNIUYGV",
            modelName: "M3 & M4 Naval (FEB 1942)",
        }
    },
}

const store_selected_rotor = {
    selectedRotor : {...store_rotors.rotors}.rotorI
}

const store_dictionary = {
    store_rotors,
    store_selected_rotor
}

const turnRotor = (rotor) => {
    rotor.rotorOrder = rotor.rotorOrder.slice(-1) + rotor.rotorOrder.slice(0, -1);
};

const changeSelectedRotor = (rotor) => 
{
    store_selected_rotor.selectedRotor = rotor;
}

const reducer = (state = store_dictionary, action) => {
    switch (action.type) {
        case LIST_ROTORS:
            return state;

        case TURN_ROTORS:
            turnRotor(state.store_rotors.rotors.rotorI);
            return { ...state };
        
        case CHANGE_SELECTED_ROTOR:
            changeSelectedRotor(action.payload)
            return { ...state };

        default:
            return { ...state };
    }
}

export default reducer;
