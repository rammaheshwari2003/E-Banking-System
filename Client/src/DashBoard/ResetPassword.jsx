import { useState } from "react";
import BASE_URL from "../config/BaseURL";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const ResetPassword=()=>{

    const [input, setInput]=useState({});
    const [passMatch, setPassMatch]=useState(false);

    const handleInput=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setInput({...input, [name]:val});
    }

    const handleSubmit=async()=>{
        let id=localStorage.getItem("id");
        let api=`${BASE_URL}/account/resetpassword`;
        if(input.Newpassword != input.Repassword){
            setPassMatch(true);
            return; 
          } else {
            setPassMatch(false); 
          }
        if(input.Newpassword.length<6){
            toast.error("Password must be at least 6-8 character");
            setPassMatch(false);
        }
        try {
            let response=await axios.post(api, {id:id, ...input});
            if(response.status==200){
                setInput({});
                toast.success(response.data.msg);
            }
            if(response.status==400){
                toast.error(response.data.msg);
            }
        } catch (error) {
            toast.error(error.response.data.msg);
        }
    }

    return(
        <>
        <div id="forpass">
            <h1>Reset Password</h1>
            Enter Old Password:<input type="password" name="Oldpassword" value={input.Oldpassword || ""} onChange={handleInput} />
            Enter new Password:<input type="password" name="Newpassword" value={input.Newpassword || ""} onChange={handleInput} />
            Enter Re-Password:<input type="password" name="Repassword" value={input.Repassword || ""} onChange={handleInput} />
            {passMatch ? (<>
            <p style={{color:"red", fontSize:"15px"}}>Password not match</p>
            </>) : (<></>)}
            
            <button onClick={handleSubmit} >Submit</button>
            <h6>* Password should be strong. <br /> * Password must contain at least 6-8 character.</h6>

        </div>
        <ToastContainer/>

        </>
    )
}
export default ResetPassword;

