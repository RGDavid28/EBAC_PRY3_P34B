import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { FormTitle, FormApp, FormInput, FormBody, FormInputSub, FormLabel, FormText,FormInputSubEx,FormInputClk} from "../ProductListPage/styles.ts"

function LoginApp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const form = useRef(); 

    const navigate = useNavigate();

    const onSubmit = (data) => {
        
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                form.current.reset();
                
                navigate("/home-page");
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                form.current.reset();
                console.log("Email or Password is not matching with our record");
            }
        } else {
            form.current.reset();
            console.log("Email or Password is not matching with our record");
        }
    };
    const newUserSubmit = () => {
        navigate("/new-user");
    };
    return (
        <>
        
        <FormBody>        
            <FormTitle>Welcome to eComerce Products</FormTitle>

            <FormApp ref={form} onSubmit={handleSubmit(onSubmit)}>
                <FormLabel for="eMail" ><FormText>Email</FormText> <FormInput id="eMail" type="email" {...register("email", { required: true })} /> </FormLabel> 
                    {errors.email && <span style={{ color: "red" }}>
                        *Email* is mandatory </span>}
                <FormLabel for="Password" ><FormText>Password</FormText> <FormInput id="Password" type="password" {...register("password")} /> </FormLabel>
                <FormInputSubEx>
                    <FormInputSub type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
                    <FormInputClk onClick={(e) => newUserSubmit()}>New User</FormInputClk> 
                </FormInputSubEx>            
            </FormApp>
        </FormBody>
        
        </>    
    );
}

export default LoginApp;