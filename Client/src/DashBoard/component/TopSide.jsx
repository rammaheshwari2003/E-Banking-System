import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

import bankLogo from "../../Image/EBank_Logo.jpg";

const TopSide=()=>{
    const navigate=useNavigate();
    
    return(
        <>
        
    
        <nav id="TopSideMenu">
            <img src={bankLogo} />


            <FaBars />
            <div id="search">
            <input type="text" placeholder="Search...."/><FaSearch id="iconSearch" />
            </div>
            <IoIosNotifications />

            <Link to="/login" id="logout" onClick={()=>{localStorage.clear()}}>Logout <IoIosLogOut />
            </Link>
       
        </nav>

        <aside>
            
            <div id="logo">
                
           <h5>NA</h5>
           <h6 style={{color:"white"}}>{localStorage.getItem("name")}</h6>
        <h6 style={{color:"white"}}>{localStorage.getItem("email")}</h6>
           </div>
           <hr size="6" color="white" />
           <div id="sidebar">
           <Link to="bankinghome">Home</Link>
           <Link to="profile">Your Profile</Link>
           <Link to="deposite">Deposite</Link>
           <Link to="withdraw">Withdraw</Link>
           <Link to="balance">Balance</Link>
           <Link to="miniStatement">Mini Statement</Link>
           <Link to="statement">Statement</Link>
           <Link to="resetPassword">Reset Password</Link>
           </div>
        </aside>

       
        
        </>
    )
}
export default TopSide;

