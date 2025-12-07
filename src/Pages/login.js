import React, { useState }  from 'react';
import '../CSS/login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });
    const setName = (e) => {
    
    setData({
      ...data,
      username: e.target.value
    });

  };
    const setEmail = (e) => {
    setData({
      ...data,
      email: e.target.value
    });

  };
    const setPassword = (e) => {
    setData({
      ...data,
      password: e.target.value
    });

  };
    

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    fetch("http://localhost:5000/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
}).then(res => res.json())
.then(data => console.log(data));

    if(data){
        localStorage.setItem("user", JSON.stringify(data.username));
        console.log(data)
        navigate("/home");
    }
    
  };


  return (
    <div class="login-container">
        <div class="login-card">
            <h2>Welcome Back 💖</h2>
            <p>Please login to continue</p>

            <form onSubmit={handleSubmit}>
                <div class="input-box">
                    <input type="text" onChange={setName} required />
                    <label>Username</label>
                </div>
                <div class="input-box">
                    <input type="email" onChange={setEmail} required />
                    <label>Email</label>
                </div>

                <div class="input-box">
                    <input type="password" onChange={setPassword} required />
                    <label>Password</label>
                </div>

                <button class="login-btn" type="submit">Login</button>

                <span class="divider">or</span>

                <button class="google-btn">Login with Google</button>

                <p class="signup">
                    Don’t have an account? <a href="/signin">Register</a>
                </p>
            </form>
        </div>
    </div>
  );
}
export default Login;