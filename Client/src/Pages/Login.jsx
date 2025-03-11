

import { Link } from "react-router-dom"
const Login=()=>{
    return(
 <>
 

 <h1 id="head">Costumer Login</h1>

 <div id="login">

 Enter Email Id:<input type="text"/>
 Enter Password:<input type="password"/>
 <button>Login</button><br />

 <h6>If You Don't Have account : <Link to="/register">Registration</Link></h6>

 </div>

    </>

    )
}

export default Login