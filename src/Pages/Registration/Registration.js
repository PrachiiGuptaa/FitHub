import React, {useState} from 'react'
import styles from './Registration.module.css'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsername = (e) => {
      setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleRegister = (e) => {
    e.preventDefault();

    //Email Validation
    if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)){
      alert("Please enter a Valid Email");
      return
    }

    // Check if email is already registered
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const existingUser = registeredUsers.find((user) => user.email === email);
    if (existingUser) {
      alert('Email is already registered');
      return;
    }

    //Username Validation
    if(!(/^[A-Za-z]+$/).test(username)){
      alert('Please enter Valid Username');
      return
    }

    //Password Validation
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
      alert("Please enter a valid password that must be at least 8 characters long and contain at least one uppercase, one lowercase, one digit and one special character.");
      return;
    }

  // Save email, username, and password to local storage
  const newUser = {
    email: email,
    username: username,
    password: password,
  };
  registeredUsers.push(newUser);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    alert("You are successfully Registered")
    setEmail("")
    setUsername("")
    setPassword("")
    navigate('/')

  }

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div className={styles.wrapper}>
    <div className={styles.form}>
    <img src='https://sales.webtel.in/images/Login-page-character.png' alt='Login'/>
    <div className={styles.signupInputs}>
    <h2>Create your Account</h2>
      <input
      type="text"
      placeholder="E-mail"
      value={email}
      onChange={handleEmail}
      />
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
      onClick={handleRegister}
      >Create Account</button>
      <span>Already have an Account!</span> 
      <span>Click below to Login</span> 
      <button
      onClick={handleLogin}
      >Login</button>

    </div>
    </div>
    </div>
  )
}

export default Register