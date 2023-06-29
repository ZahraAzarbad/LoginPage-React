import { useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Login(){
    const info ={
        email: "",
    username: "",
    password: "",
    confirm: ""
    }
    const inputs=[
        {
            id:1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Email is not valid!",
            required: true,
          }, 
          {
            id:2,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
              "Username is too short",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
          {
            id:3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
              "Password is too short(at least 5 characters)",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@_#$%^&*])[a-zA-Z0-9!@_#$%^&*]{8,20}$`,
            required: true,
          },
          {
            id:4,
            name: "confirm",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password is not match!",
            pattern: info.password,
            required: true,
          }
    ]
    const [information,setInformation]=useState(info)

    function handleInputs(e){
        setInformation({...information,[e.target.name]:e.target.value});
    }
    function handleSignUpBtn(e){
console.log(information);
    }

    return(
        <form className="form">

            <div className="btns-wrapper">
<Button value='Sign In' isActive={false}/>
<Button value='Sign Up' isActive={true}/>
            </div>
            {inputs.map((input)=>(<Input key={input.id}{...input} value={information[input.name]} onChange={handleInputs}/>
            ))}
            <Button value="Sign Up" onSubmitForm={handleSignUpBtn} />

        </form>
    )
}