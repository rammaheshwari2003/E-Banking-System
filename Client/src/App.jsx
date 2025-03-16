
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Registration from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import ForgotPassword from "./Pages/ForgotPassword"
import ResetPassword from "./Pages/ResetPassword"
import Profile from "./Pages/Profile"

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/> 
       <Route path="yourProfile" element={<Profile/>}/> 
       <Route path="resetpassword" element={<ResetPassword />} />
        </Route>
       <Route path="login" element={<Login/>}/>
       <Route path="register" element={<Registration/>}/>


       <Route path="forgotpassword" element={<ForgotPassword />} />

       
     

    </Routes>
    </BrowserRouter>




    </>
  )
}
export default App