import { Link, useNavigate } from "react-router-dom";
import img from "../css/my.jpg";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

import bankLogo from "../Images/EBank_Logo.jpg";

const Menu=()=>{
    const navigate=useNavigate();
    return(
        <>
        
    
        <nav>
            <img src={bankLogo} />


            <FaBars />
            <div id="search">
            <input type="text" placeholder="Search...."/><FaSearch id="iconSearch" />
            </div>
            <IoIosNotifications />

            <Link to="login">Logout <IoIosLogOut />
            </Link>
       
        </nav>

        <aside>
            
            <div id="logo">
                
           <img src={img}/>
           </div>
           <hr size="6" color="white" />
           <div id="sidebar">
           <Link to="home">Home</Link>
           <Link to="yourProfile">Your Profile</Link>
           <Link to="miniStatement">Mini Statement</Link>
           <Link to="statement">Statement</Link>
           <Link to="resetPassword">Reset Password</Link>
           </div>
        </aside>

       
        
        </>
    )
}
export default Menu;