import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config/BaseURL";

const Balance = () => {
  const [bal, setBal] = useState(0);

  let id=localStorage.getItem("id");
  let api = `${BASE_URL}/account/balance`;
  let data=async()=>{
    let response=await axios.get(`${api}?id=${id}`);
    setBal(response.data.balance);
  }

  useEffect(() => {
    data();
    
  }, []);

  return (
    <div className="balance-display">
      <h1>Balance Inquiry</h1>
      <h2>Available Balance: {bal}</h2>
    </div>
  );
};

export default Balance;




// import { useState, useEffect } from "react";
// import axios from "axios";
// import BASE_URL from "../config/BaseURL";

// const Balance = () => {
//   const [bal, setBal] = useState(0);  // State to store the balance

//   // Modify the API URL to include the query string
//   let api = `${BASE_URL}/account/balance/?id=${id}`;
//   let id = localStorage.getItem("id");

//   let data = async () => {
//     try {
//       // Send the id as a query string parameter
//       const response = await axios.get(api);
//       console.log(response.data); // You can log this to check the response
//       setBal(response.data.balance); // Assuming the response has a field 'balance'
//     } catch (error) {
//       console.error("Error fetching balance", error);
//     }
//   };

//   useEffect(() => {
//     data();  // Call the data function to fetch the balance when the component mounts
//   }, []);

//   return (
//     <div className="balance-display">
//       <h1>Balance Inquiry</h1>
//       <h2>Account Balance: {bal}</h2>
//     </div>
//   );
// };

// export default Balance;
