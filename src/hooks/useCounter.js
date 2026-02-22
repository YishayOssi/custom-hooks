import { useState } from "react";

export default function useCounter(initial = 0){
    if(typeof initial !== "number"){
        throw new Error("useToggle hook must recieve number value!!!");
    }
    const [value, setValue] = useState(initial)

const inc = () => setValue(value+1);
const dec = () => setValue(value-1);
const reset = () => setValue(initial);

return { value, inc, dec, reset }; 
}