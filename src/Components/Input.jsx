import { useState } from "react";
import setIcon from "./setIcon";

export default function Input({name,errorMessage,onChange,...others}){
    const [focused,setFocused]=useState(false);
    const icon = setIcon(name);
    return(
        <div className="form-input">
            {icon}
            <input {...others} name={name} onChange={onChange}  onBlur={() => setFocused(true)}
        focused={focused.toString()} />
        <small>{errorMessage}</small>
        </div>
    )
}