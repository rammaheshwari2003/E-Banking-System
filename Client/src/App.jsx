
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Registration from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
       {/* <Route index element={<Home/>}/>
       <Route path="home" element={<Home/>}/> */}
        </Route>
       <Route path="login" element={<Login/>}/>
       <Route path="register" element={<Registration/>}/>

       
     

    </Routes>
    </BrowserRouter>




    </>
  )
}
export default App