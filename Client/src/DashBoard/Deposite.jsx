// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import BASE_URL from "../config/BaseURL";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from 'react-toastify';



// const Deposite=()=>{
//     const [amount, setAmount] = useState(0);
//     const navigate=useNavigate();

//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         let api=`${BASE_URL}/account/deposit`;
//         try {
//             const response = await axios.post(api, {amount,id:localStorage.getItem("id")});
//             toast.success(response.data);
//             setTimeout(() => {
//                 // navigate("/Dashboard/balance")
//             },1000);
//         }
//         catch (error) {
//             toast.error(error.response.data);
//         }
//     }

//     return(
//         <>

//         <div id="deposite">
//         <h1>Deposite Amount</h1>

//         <form onSubmit={handleSubmit}>
//             <label>Amount:</label>
//             <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
//             <br/>
//             <button type="submit">Deposite</button>
//         </form>


//         </div>
//         <ToastContainer/>

//         </>
//     )
// }

// export default Deposite;






import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config/BaseURL";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";  // Import a spinner component

const Deposite = () => {
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);  // Loader state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);  // Show loader before making the request

        let api = `${BASE_URL}/account/deposit`;

        try {
            if(!amount || amount<=0){
                toast.error("Please Correct amount");
            }
            if(amount>0){
                
            
            const response = await axios.post(api, { amount, id: localStorage.getItem("id") });
            
            if(response.data.msg){
            setTimeout(() => {
                setLoading(true); // Hide loader after the timeout

                setTimeout(()=>{
                    setLoading(false)
                    toast.success(response.data.msg);
                },2000)
                setTimeout(()=>{
                    navigate("/Dashboard/balance");
                },3000)         
        setAmount("");

            }, 500);  // Simulating a delay for UI feedback    
        }
    }
    }
        catch (error) {
            setLoading(false);  // Hide loader in case of error
            toast.error(error.response?.data || "An error occurred");
        }

    };

    return (
        <>
            <div id="deposite">
                <h1>Deposite Amount</h1>

                {loading ? (<>
                    {loading && (
                    <div className="loader-container">
                        <ClipLoader color="#36d7b7" loading={loading} size={50} /> {/* Spinner loader */}
                        <h5>Loading Please wait...</h5>
                        <h6>Do not refresh the page or close the tab</h6>
                    </div>
                    )}
                </>) : (<>
                    
                    <form onSubmit={handleSubmit}>
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    <br />
                    <button type="submit" disabled={loading}>Deposite</button>
                </form>
                </>)}

                

                

            </div>
            <ToastContainer />
        </>
    );
};

export default Deposite;
