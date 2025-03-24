import { Outlet } from "react-router-dom";
import TopSide from "./component/TopSide";

const DashboardLayout=()=>{
    return(
        <>
        <TopSide />
        <Outlet />
        
        </>
    )
}
export default DashboardLayout;