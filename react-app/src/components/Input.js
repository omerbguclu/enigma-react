import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyHandler } from "../store/actions/inputActionManager";

function Rotors() {
    const dispatch = useDispatch();
    const { input_store } = useSelector(state => state);

    const characterHandler = (e) => {
        const regex = new RegExp('[a-zA-Z]'); // only allow the wanted characters
        if(regex.test(e.key))
        {
            dispatch(keyHandler(e.key));
            console.log("after",input_store);
        }
        else
        {
            e.preventDefault();
        }
    };

    return (
        <textarea onKeyDown={(e) => characterHandler(e)} className="form-control" id="inputTextArea" rows="3"></textarea>
    )
}

export default Rotors;