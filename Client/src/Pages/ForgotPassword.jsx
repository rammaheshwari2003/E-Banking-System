import { useState } from "react";
import BASE_URL from "../config/BaseURL";
import axios from "axios";

const ForgotPassword=()=>{

    const [btnStatus, setBtnStatus]=useState(false);
    const [email, setEmail]=useState("");

    const handleInput=()=>{
        setBtnStatus(true)
    }
    const handleSubmit=()=>{
        // setBtnStatus(true)

    }

    const handleVerify=async()=>{
        let api=`${BASE_URL}/customer/emailverify`;
        const res=await axios.post(api, {email:email});
        alert(res.data);
        setBtnStatus(true);
    }


    


    return(
        <>
        <div id="forpass">
            <h1>Forgot Password</h1>

                Enter Email Id:<input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            {btnStatus ? (<>
                Enter OTP:<input type="text" name="otp"/><br/>
            </>) : (<>
            </>)}

            {btnStatus ? (<>
                <button onClick={handleSubmit} >Submit</button><br />
                </>) : (<>
            <button onClick={handleVerify}>Verify</button><br />
            </>)}


        </div>
        
        </>
    )
}
export default ForgotPassword;