import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../CSS/Signin.css';

function Signin() {
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:'',
    password:''
  });
  const setEmail=(e)=>{
    setData({
      ...data,
      email:e.target.value
    });
  }
  const setPassword=(e)=>{
    setData({
      ...data,
      password:e.target.value
    });
  }
 const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  console.log(result);

  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(result.user));
    navigate("/");
  } 
};


  return (
    <div>
    <div className="signin-container">
        <div className="signin-box">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={setEmail} required />
                <input type="password" placeholder="Password" onChange={setPassword} required />
                <button type="submit">Login</button>
            </form>
            <div className="links">
                <p>Don't have an account? <a href="/">Sign Up</a></p>
                <p><a href="/">Forgot Password?</a></p>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  );
}
export default Signin;