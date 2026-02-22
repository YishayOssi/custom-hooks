import { useState } from "react";

export default function useToggle(defaultBool = false){
    if(typeof defaultBool !== "boolean"){
        throw new Error("useToggle hook must recieve boolean value!!!");
    }
    const [bool, setBool] = useState(defaultBool);

    const setFalse = () => setBool(false);
    const setTrue = () => setBool(true);
    const toggle = () => setBool(!bool);

    return {value: bool, toggle, setTrue, setFalse}
}

