import { useState } from "react";
import BASE_URL from "../config/BaseURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword=()=>{

    const navigate=useNavigate();

    const [btnStatus, setBtnStatus]=useState(false);
    const [email, setEmail]=useState("");
    const [otp, setOTP]=useState("");

    
    const handleSubmit=async()=>{
        let api=`${BASE_URL}/customer/forgotPass`;
        let res=await axios.post(api, {email:email, otp:otp});
        alert(res.data);
        navigate("/changeforgotpassword");
        setBtnStatus(true);

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
                Enter OTP:<input type="text" name="otp" onChange={(e)=>{setOTP(e.target.value)}}/><br/>
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