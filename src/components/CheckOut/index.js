// inside src/FillserForm.js
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {FormBody, FormTitle, FormApp, FormInput, FormInputSub, FormLabel, FormText, FormInputSubEx, FormSelect} from "../ProductListPage/styles.ts";

function CheckOut() {
    const form= useRef();

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    

    const onSubmit = (data) => {

        localStorage.setItem(data.compra,JSON.stringify({ 
            shipto: data.shipto, metpago: data.metpago 
        }));
        navigate("/purchase");
    };


    return (
        <>
        <FormBody>
            <FormTitle>Purchase Confirm </FormTitle>

            <FormApp ref={form} onSubmit={handleSubmit(onSubmit)}>
                <FormLabel for="shipTo" ><FormText>Ship to</FormText><FormInput id="shipTo" type="text" {...register("shipto")} /> </FormLabel>
                                                            
                <FormLabel for="paymentMethod" ><FormText>Payment method</FormText>
                            
                        <FormSelect id="paymentMethod" name="metpago">
                            <option value=""           >Select</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Cash">Cash</option>
                        </FormSelect>

                </FormLabel>
                {errors.metpago && <span style={{ color: "red" }}> *Payment method* is mandatory </span>}

                <FormLabel for="paymentID" ><FormText>Payment ID</FormText><FormInput id="paymentID" type="text" name="compra" value="CheckOut"/> </FormLabel>        
                <FormInputSubEx>
                    <FormInputSub type={"submit"} style={{ backgroundColor: "#a1eafb" }} />                    
                </FormInputSubEx>
            </FormApp>
        </FormBody>    
        </>
    );
}
export default CheckOut;