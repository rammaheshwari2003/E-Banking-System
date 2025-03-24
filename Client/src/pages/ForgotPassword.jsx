import { useState } from "react";
import BASE_URL from "../config/BaseURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword=()=>{

    const navigate=useNavigate();

    const [btnStatus, setBtnStatus]=useState(false);
    const [email, setEmail]=useState("");
    const [otp, setOTP]=useState("");

    
    const handleSubmit=async()=>{
        try {
        let api=`${BASE_URL}/customer/forgotPass`;
        let res=await axios.post(api, {email:email, otp:otp});
        localStorage.setItem("email", email);
        navigate("/changeforgotpassword");
        // setBtnStatus(true);
        toast.success(res.data.msg);
            
        } catch (error) {
            toast.error(error.response.data.msg);
        }
    }

    const handleVerify=async()=>{
        try {
        let api=`${BASE_URL}/customer/emailverify`;
        const res=await axios.post(api, {email:email});
        toast.success(res.data.msg);
        setBtnStatus(true);
        } catch (error) {
            toast.error(error.response.data.msg);
        }
        
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
         <ToastContainer />
        </>
    )
}
export default ForgotPassword;