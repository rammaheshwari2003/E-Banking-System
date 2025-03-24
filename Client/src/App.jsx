import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePass from "./pages/UpdatePass";

import DashboardLayout from "./DashBoard/DashboardLayout";
import BankingHome from "./DashBoard/BankingHome";
import Profile from "./DashBoard/Profile";
import Deposite from "./DashBoard/Deposite";
import Withdraw from "./DashBoard/Withdraw";
import Balance from "./DashBoard/Balance";
import MiniStatement from "./DashBoard/MiniStatement";
import Statement from "./DashBoard/Statement";
import ResetPassword from "./DashBoard/ResetPassword";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />      
      </Route>
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="changeforgotpassword" element={<UpdatePass />} />
    </Routes>


<Routes>
  <Route path="dashboard" element={<DashboardLayout />}>
  <Route index element={<BankingHome />} />
  <Route path="bankinghome" element={<BankingHome />} />
  <Route path="profile" element={<Profile />} />
  <Route path="deposite" element={<Deposite />} />
  <Route path="withdraw" element={<Withdraw />} />
  <Route path="balance" element={<Balance />} />
  <Route path="miniStatement" element={<MiniStatement />} />
  <Route path="statement" element={<Statement />} />
  <Route path="resetpassword" element={<ResetPassword />} />
  </Route>
</Routes>


    </BrowserRouter>
    
    
    </>
  )
}
export default App;