import { useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config/BaseURL";
import { useNavigate } from "react-router-dom";
const BankingHome=()=>{

    const userAuthenticate = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.post(`${BASE_URL}/customer/authenticate`, null, {
            headers: { "x-auth-token": token },
          });
         
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("id", response.data._id);
          navigate("/dashboard");
        }
      };

      useEffect(() => {
        userAuthenticate();
      }, []);

    return(
 <>

        

    
 <div id="main">
            <marquee behavior="alternate" direction="lefft">Welcome to E-Banking Service</marquee>
        </div>
    </>

    )
}

export default BankingHome;