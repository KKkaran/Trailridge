import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
 
    const [formState, setFormState] = useState({
        email: "",
        password:""
    })
    let dataa;

    const [loginUser, {data,loading, error }] = useMutation(LOGIN_USER); //will give method which called when submit form to login..

    const formSubmit = async e => {
        e.preventDefault();
        console.log(formState)

        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await loginUser({
            variables: { ...formState }
            });
            dataa = data;
            Auth.login(data.login.token);

            //console.log(data.login.token);
        } catch (e) {
            console.error(e);
        }
    }
    
    return (
        <>
            <div className="border border-dark p-4 text-center">
                <form action="" onSubmit={formSubmit}>

                    <label htmlFor="email">Email</label> <br />
                    <input type="text" id="email" onChange={e=>setFormState({...formState,email:e.target.value})} value = {formState.email} required /><br />  

                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" onChange={e=>setFormState({...formState,password:e.target.value})} value = {formState.password} required /> <br /><br />

                    <input type="submit" value="LOGIN" />
                    {error && <div style={{ color: "red" }} >Login failed</div>}
                    {data && <div style={{ color: "green" }} >Login Successfull</div>}

                </form>
            </div>
        </>
    )

}

export default Login;