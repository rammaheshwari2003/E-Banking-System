import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import BASE_URL from "../config/BaseURL";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const Registration=()=>{

    const [input, setInput]=useState({});
    const navigate=useNavigate();

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput({...input,[name]:value});
    console.log(input)
}

const handleSubmit=async(e)=>{
e.preventDefault();
try {
    let api=`${BASE_URL}/customer/registration`;
    let res=await axios.post(api,input);
    if(res.status===200){
    toast.success(res.data.msg);
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }
    if (res.status === 400) {
      toast.error(res.data.msg);
    }
} catch (error) {
  toast.error(error.response.data.msg);
}
}

    return(
                <>
        <h1 id="head">Customer Registration</h1>

        <div id ="registration">
          <form action="">
            <label>Name:</label>
               <input type="text" name="name" onChange={handleInput} required />
                  <br />
                    <label>Email:    </label>
                      <input type="email" name="email" onChange={handleInput} required />
                         <br />
                           <label>Address:</label>
                             <input type="text" name="address" onChange={handleInput} required />
                                <br />
                                  <label>Enter City :</label>
                                    <input type="text"name="city" onChange={handleInput} required />
                                        <br/>
                                        <label>Enter Mobile No :</label>
                                            <input type="text" name="mobile" onChange={handleInput} required />
                                                <br/> <br />
                                            <label>Account Type: </label>
                                        <select name="accountType" onChange={handleInput} required>
                                        <option value="">Select</option>
                                        <option value="savings">Savings</option>
                                        <option value="current">Current</option>
                                      </select>
                                    <br /> <br />
                            <button type="submit" onClick={handleSubmit}>Register</button>
                    </form>
             </div>
             <ToastContainer />
          </>

    )
}

export default Registration;