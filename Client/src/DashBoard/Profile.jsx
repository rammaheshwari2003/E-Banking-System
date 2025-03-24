import { useState, useEffect } from "react";
import BASE_URL from "../config/BaseURL";
import axios from "axios";
const Profile=()=>{

    const [profileData, setProfileData]=useState({});
    const [Acc, setAcc] = useState({});
    const Data=async()=>{
        let id=localStorage.getItem("id");
        let api=`${BASE_URL}/account/profile?id=${id}`;
        let response=await axios.get(api);
        setProfileData(response.data);
        setAcc(response.data.accountID);
    }

    useEffect(() => {
        Data();
    }, []);
    return(
        <>
            <div id="profile">
                <h1>Profile</h1> <hr />
                <h2>Account Holder Name : {profileData.name}  </h2>
                <h2>Account Number : {Acc.accountNumber} </h2>
                <h2>Account Type : {profileData.accountType} </h2>
                <h2>Email : {profileData.email} </h2>
                <h2>Mobile No : {profileData.mobile} </h2>
                <h2>Address : {profileData.address} </h2>
                <h2>City : {profileData.city} </h2>
            </div>
        
        
        </>
    )
}
export default Profile;