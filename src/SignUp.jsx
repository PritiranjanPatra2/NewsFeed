import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignContext } from './App';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

function SignUp() {
    const { email, password, setEmail, setPassword } = useContext(SignContext);
    const navigate = useNavigate();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed up:', user);
            alert('User signed up successfully!');
            navigate('/login');
        })
        .catch((err) => {
            console.log('Error code:', err.code);
            console.log('Error message:', err.message);
        });
    };

    return (
        <div className="signup-container">
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter Your email"  
            />
            <input 
                type="password" 
                placeholder="Enter Your password" 
                onChange={(e) => setPassword(e.target.value)}  
            />
            <button onClick={handleSignUp}>Sign Up</button>
            <p>Are you already logged in?</p>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default SignUp;
