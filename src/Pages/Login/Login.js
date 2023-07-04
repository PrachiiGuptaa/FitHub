import React, {useState} from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
      setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault()

     if(username.trim() === "" || password.trim() === ""){
      alert("Username and Password are mandatory")
      return
    }

    // Retrieve registered users from local storage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Find matching user based on entered username
    const matchedUser = registeredUsers.find((user) => user.username === username);

    if (matchedUser && matchedUser.password === password) {
      // Successful login
      alert("You are sucessfully Logged in")
      localStorage.setItem('loggedIn', 'true');
      setUsername("");
      setPassword("");
      navigate('/');
    } else {
      // User not Registered
      alert('User is not Registered!');
      setUsername("");
      setPassword("");
      navigate('/registration');
    }
  }

  const handleRegister = () => {
    navigate('/registration');
  }

  return (
    <div className={styles.wrapper}>
    <div className={styles.form}>
    <img src='https://sales.webtel.in/images/Login-page-character1.png' alt='Login'/>
    <div className={styles.loginInputs}>
    <h2>Login to your Account</h2>
      <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={handleUsername}
      />
      <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={handlePassword}
      />
      <button
      onClick={handleLogin}
      >Login</button>
      <span>Don't have an Account!</span> 
      <span>Click below to Register</span> 
      <button
      onClick={handleRegister}
      >Register</button>
    </div>
    </div>
    </div>
  )
}

export default Login