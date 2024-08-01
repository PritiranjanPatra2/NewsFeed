import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignContext } from './App';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const { email, password, setEmail, setPassword, setUser } = useContext(SignContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert('Login Successful');
            setUser(user);
            navigate('/newsfeed');
        })
        .catch((err) => {
            console.log(err.code);
            console.log(err.message);
            alert(err.message);
        });
    };

    return (
        <div className="login-container">
            <input 
                type="email" 
                placeholder="Enter Your Mail" 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Enter Your Password" 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
            <p>Are you new here?</p>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default Login;
