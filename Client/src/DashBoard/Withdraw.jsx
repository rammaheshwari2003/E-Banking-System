import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config/BaseURL";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

import cashWithdraw from "../Image/cashWithdraw.gif";

const Withdraw=()=>{
    const [amount, setAmount] = useState();
    const [withdraw, setWithdraw] = useState(false);
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BASE_URL}/account/withdraw`;
        try {
            const response = await axios.post(api, {amount,id:localStorage.getItem("id")});
    
                        setTimeout(() => {
                            setWithdraw(true);
            
                            setTimeout(()=>{
                                setWithdraw(false);
                                toast.success(response.data.msg);
                            },5000)
                            setTimeout(()=>{
                                navigate("/Dashboard/balance");
                            },6500)         
                    setAmount("");
            
                        }, 500);  // Simulating a delay for UI feedback           
        }
        catch (error) {
            setWithdraw(false);
            toast.error(error.response.data.msg);
        }
    }

    return(
        <>

        <div id="Withdraw">
        <h1>Withdraw</h1>

        <form onSubmit={handleSubmit}>
            <label>Amount:</label>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
            <br/>
            <button type="submit">Withdraw</button>
        </form>

        {withdraw ? (<>
            <img src={cashWithdraw}   />
            </>): (<></>)}
        
        

       
        
        </div>
        <ToastContainer/>

        </>
    )
}

export default Withdraw

