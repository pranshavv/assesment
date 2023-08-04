import React, { useState } from 'react'

import backgroundImage from '../assests/bgImage.jpg';
import sideImage from '../assests/ekImage.jpg'
export const Login = (props) => {

    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <>

        <img src={sideImage} alt="Ba" className="sideImg" />
        <img src={backgroundImage} alt="Background" className="background-img" />
      <div className="auth-form-container">
            <h2>Welcome Back!</h2>
            <h3>Login to your account</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
                <button className="log" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    </>
  )
}


