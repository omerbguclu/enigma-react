import { KEY_BACKSPACE, KEY_NOT_HANDLED, KEY_VALID } from "../types/inputTypes"

export const keyHandler = (payload) => {
    const regex = new RegExp('[a-z]');
    const result = regex.test(payload);

    if(payload === 'Backspace'){
        return {
            type: KEY_BACKSPACE,
            payload : payload
        }
    }
    else if(result)
    {
        return {
            type: KEY_VALID,
            payload : payload
        }
    }
    else{
        return {
            type: KEY_NOT_HANDLED,
            payload : payload
        }
    }
}