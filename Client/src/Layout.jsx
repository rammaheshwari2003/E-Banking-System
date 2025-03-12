import {Link,Outlet} from "react-router-dom"
import Menu from "./component/Menu";



const Layout = () => {
    return (
        <> 
{/* <nav>
        <Link to="home">Home</Link> 
        <Link to="about">About</Link> 
        <Link to="service">Service</Link> 
        <Link to="login">Login</Link>
        

</nav> */}
<Menu />

        <Outlet id="outlet"/>

        
        </>
    );
};  

export default Layout