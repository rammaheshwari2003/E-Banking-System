import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config/BaseURL";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.email || !input.password) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsLoading(true);
    const api = `${BASE_URL}/customer/login`;
    
    try {
      const response = await axios.post(api, input);
      
      if (response.status === 200) {
        toast.success(response.data.msg);
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      }
      
      if (response.status === 400) {
        toast.error(response.data.msg);
        return;
      }

    } catch (error) {

      if (error.response) {
        toast.error(error.response.data.msg || "An error occurred");
      } else if (error.request) {
        toast.error("No response received from the server.");
      } else {
        toast.error("Error: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 id="head">Customer Login</h1>
      <div id="login">
        <label>Enter Email Id:</label>
        <input type="text" name="email" value={input.email} onChange={handleInput} />
        <br />
        <label>Enter Password:</label>
        <input type="password" name="password" value={input.password} onChange={handleInput} />
        <br />
        <button onClick={handleSubmit} disabled={isLoading}> {isLoading ? "Loading..." : "Submit"} </button>
        <br />
        <h6 style={{ margin: "auto" }}>
        <Link to="/forgotpassword">Forgot Password?</Link>
        </h6>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
