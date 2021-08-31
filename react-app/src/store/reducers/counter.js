import { INCREASE_THE_STATE, DECREASE_THE_STATE } from "../types/types";

const store_dictionary = {
    default_state : 0,
}

const reducer = (state = store_dictionary.default_state, action) => {
    switch (action.type) {
        case INCREASE_THE_STATE:
            return state + 1;

        case DECREASE_THE_STATE:
            return state - 1;

        default:
            return state;
    }
}

export default reducer;