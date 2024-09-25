import React, { useState } from "react";
import { addCustomer as addCustomerAuction } from "./Slices/CustomerSlices";
import { useDispatch } from "react-redux";



export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();


    function addCustomer() {
        if (input) {
            dispatch(addCustomerAuction(input));
            setInput("");
        }
    }

    return <div>
        <h1>customer add</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addCustomer}>add</button>
    </div>
}