import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config/BaseURL";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const UpdatePass = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  
  useEffect(() => {
    
    if (!localStorage.getItem("email")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setInput({ ...input, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = localStorage.getItem("email");

    if (!input.Newpassword || !input.Repassword) {
      toast.error("Both password fields are required.");
      return;
    }

    if (input.Newpassword !== input.Repassword) {
      toast.error("Passwords don't match.");
      return;
    }

    try {
      const api = `${BASE_URL}/customer/changepass`;

      const response = await axios.post(api, { email: email, ...input });
      setInput({});
      toast.success(response.data.msg);
      localStorage.clear();
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.msg || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div id="forpass">
        <h1>Change Password</h1>

        <label>Enter new Password:</label>
        <input
          type="password"
          name="Newpassword"
          onChange={handleInput}
          value={input.Newpassword || ""}
        />
        <br />

        <label>Enter Re-Password:</label>
        <input
          type="password"
          name="Repassword"
          onChange={handleInput}
          value={input.Repassword || ""}
        />
        <br />

        <button onClick={handleSubmit}>Submit</button>
        <br />
      </div>

      <ToastContainer />
    </>
  );
};

export default UpdatePass;
