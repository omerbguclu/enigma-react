import { LIST_ROTORS } from "../types/types";

const store_dictionary = {
    rotors : {
        rotorI : {
            rotorName : "I",
            rotorOrder : "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
            modelName : "Enigma I",
        },
        rotorII : {
            rotorName : "II",
            rotorOrder : "JDKSIRUXBLHWTMCQGZNPYFVOE",
            modelName : "Enigma I",
        },
        rotorIII : {
            rotorName : "III",
            rotorOrder : "FHJLCPRTXVZNYEIWGAKMUSQO",
            modelName : "Enigma I",
        },
        rotorIV : {
            rotorName : "IV",
            rotorOrder : "SOVPZJAYQUIRHXLNFTGKDCMWB",
            modelName : "M3 Army",
        },
        rotorV : {
            rotorName : "V",
            rotorOrder : "VZBRGITYUPSDNHLXAWMJQOFECK",
            modelName : "M3 Army",
        },
        rotorVI : {
            rotorName : "VI",
            rotorOrder : "PGVOUMFYQBENHZRDKASXLICTW",
            modelName : "M3 & M4 Naval (FEB 1942)",
        },
        rotorVII : {
            rotorName : "VII",
            rotorOrder : "JHGRCXMYSWBOUFAIVLPEKQDT",
            modelName : "M3 & M4 Naval (FEB 1942)",
        },
        rotorVIII : {
            rotorName : "VIII",
            rotorOrder : "HTLXOCBJSPDZRAMEWNIUYGV",
            modelName : "M3 & M4 Naval (FEB 1942)",
        }
    }
}

const reducer = (state = store_dictionary.rotors, action) => {
    switch (action.type) {
        case LIST_ROTORS:
            return state;

        default:
            return state;
    }
}

export default reducer;
