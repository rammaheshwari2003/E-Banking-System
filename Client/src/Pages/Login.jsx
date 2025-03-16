import { useState,useEffect } from "react"
import axios from "axios"
import BASE_URL from "../config/BaseURL"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const Login=()=>{
const[input,setInput]=useState("")
const navigate=useNavigate()

const handleInput=(e)=>{
    const name=e.target.name;
     const value= e.target.value 

     setInput({...input,[name]:value})

}

const handleSubmit=async()=>{
    // e.preventDefault();
    
    let api=`${BASE_URL}/customer/login`
    try {
        const response=await axios.post(api,input);
    alert(response.data);
    // console.log(response.data);
    navigate("/");
        
    } catch (error) {
        console.log(error);
    }
    
}

    return(
 <>
 

 <h1 id="head">Customer Login</h1>

 <div id="login">

 Enter Email Id:<input type="text" name="email" onChange={handleInput}/><br/>
 Enter Password:<input type="password" name="password" onChange={handleInput}/><br/>
 <button onClick={handleSubmit} >Submit</button><br />

<h6><Link to="/forgotpassword">Forgot Password</Link></h6>
 <h6>If You Don't Have account : <Link to="/register">Registration</Link></h6>

 </div>

    </>

    )
}

export default Login