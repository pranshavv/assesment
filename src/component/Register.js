import React, { useState } from "react";
import backgroundImage from '../assests/bgImage.jpg';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [num, setNum] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <img src={backgroundImage} alt="Background" className="background-img" />
        <div className="auth-form-container">
            <h2>Join!</h2>
            <h3>Login to your account</h3>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter Password" id="password" name="password" />
            <label htmlFor="confirm">Confirm Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Confirm Password" id="password" name="password" />
            <label htmlFor="name">Contact Number</label>
            <input value={num} name="num" onChange={(e) => setNum(e.target.value)} id="name" placeholder="Contact Number" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    </>
    )
}
