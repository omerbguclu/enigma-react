import { KEY_BACKSPACE, KEY_VALID } from "../types/inputTypes";

export const keys = {
	VALID_KEY: 0,
	UNVALID_KEY: 1,
	BACKSPACE: 2,
}

const initial_state = keys.UNVALID_KEY;

const reducer = (state = initial_state, action) => {

    switch (action.type) {
        case KEY_BACKSPACE:
            console.log(action.payload);
            state = keys.BACKSPACE;
            return state;

        case KEY_VALID:
            state = keys.VALID_KEY;
            return state;

        default:
            return state;
    }
}

export default reducer;