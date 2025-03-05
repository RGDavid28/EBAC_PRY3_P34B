// inside src/FillserForm.js
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {FormBody, FormTitle, FormApp, FormInput, FormInputSub, FormLabel, FormText, FormInputSubEx, FormInputClk} from "../ProductListPage/styles.ts";

function FillUserForm() {
    const form= useRef();

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify({ 
            name: data.name, password: data.password 
        }));
        
        console.log(JSON.parse(localStorage.getItem(data.email)));
        form.current.reset();
    };

    const returnLogin = () => {
        navigate("/");
    };
      
    return (
        <>
        <FormBody>
            <FormTitle>New Users Add to eComerce</FormTitle>

            <FormApp ref={form} onSubmit={handleSubmit(onSubmit)}>
                <FormLabel><FormText>Name</FormText><FormInput type="text" {...register("name")} /> </FormLabel>
                <FormLabel><FormText>Email</FormText><FormInput type="email" {...register("email", { required: true })}/> </FormLabel>
                    {errors.email && <span style={{ color: "red" }}>
                        *Email* is mandatory </span>}
                <FormLabel><FormText>Passwor</FormText><FormInput type="password" {...register("password")} /> </FormLabel>
                <FormInputSubEx>
                    <FormInputSub type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
                    <FormInputClk onClick={(e) => returnLogin()}>Go Login</FormInputClk>
                </FormInputSubEx>
            </FormApp>
        </FormBody>    
        </>
    );
}
export default FillUserForm;