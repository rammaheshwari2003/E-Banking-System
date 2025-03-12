import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import BASE_URL from "../config/BaseURL";


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
let api=`${BASE_URL}/customer/register`;
let res=await axios.post(api,input);
console.log(res.data);
alert(res.data);
navigate("/login");

}

    return(
 <>

 <h1 id="head">Customer Registration</h1>

 <div id ="login">
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
<h6>Already Have Account : <Link to="/login">Login</Link></h6>
    </div>
    </>

    )
}

export default Registration