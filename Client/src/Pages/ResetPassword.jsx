import { useState } from "react";
import BASE_URL from "../config/BaseURL";
import axios from "axios";

const ResetPassword=()=>{

    const [input, setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setInput({...input, [name]:val});
    }

    const handleSubmit=async()=>{
        let api=`${BASE_URL}/customer/resetpassword`;
        if(input.Newpassword == input.Repassword){
        const res= await axios.post(api, input);
        alert(res.data);
            
        }
        else{
            alert("Password Not Matched");
        }
        
    }

    return(
        <>
        <div id="forpass">
            <h1>Reset Password</h1>
            Enter Old Password:<input type="password" name="Oldpassword" onChange={handleInput} /><br/>
            Enter new Password:<input type="password" name="Newpassword" onChange={handleInput} /><br/>
            Enter Re-Password:<input type="password" name="Repassword" onChange={handleInput} /><br/>
           
            <button onClick={handleSubmit} >Submit</button><br />


        </div>
        
        </>
    )
}
export default ResetPassword;