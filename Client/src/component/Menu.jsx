import { Link, useNavigate } from "react-router-dom";
import img from "../css/my.jpg";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";


const Menu=()=>{
    const navigate=useNavigate();
    return(
        <>
        
    
        <nav>
            <FaBars />
            <div id="search">
            <input type="text" placeholder="Search...."/><FaSearch id="iconSearch" />
            </div>
            <IoIosNotifications />

       
        </nav>

        <aside>
            <div id="logo">
           <img src={img}/>
           </div>
           <hr />
           <div id="sidebar">
           <Link to="home">Home</Link>
           <Link to="service">Service</Link>
           <Link to="login">Logout</Link>
           </div>
        </aside>

        <div id="main">
            <marquee behavior="alternate" direction="lefft">Welcome to E-Banking Service</marquee>
        </div>
        
        </>
    )
}
export default Menu;