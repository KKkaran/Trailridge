import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const Signup = () => {

    const [addUser,{error}] = useMutation(ADD_USER)
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password:""
    })
    const handleFormSubmit = async event => {
        event.preventDefault();
        
        // use try/catch instead of promises to handle errors
        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
            variables: { ...formState }
            });
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <>
             <div className="border border-dark p-4 text-center">
                <form action="" onSubmit={handleFormSubmit} >

                    <label htmlFor="email">Email</label> <br />
                    <input type="text" id="email" onChange={e=>setFormState({...formState,email:e.target.value})}  required /><br />  

                    <label htmlFor="username">username</label> <br />
                    <input type="text" id="username" onChange={e=>setFormState({...formState,username:e.target.value})}  required /><br />

                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" onChange={e=>setFormState({...formState,password:e.target.value})}  required/> <br /><br />

                    <input type="submit" value="Signup"  />

                </form>
            </div>
        </>
    )

}

export default Signup;