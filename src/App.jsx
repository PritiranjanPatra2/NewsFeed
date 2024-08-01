import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import NewsFeed from './NewsFeed';

export const SignContext = createContext(null);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  return (
    <SignContext.Provider value={{ email, password, user, setEmail, setPassword, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
        </Routes>
      </BrowserRouter>
    </SignContext.Provider>
  );
}

export default App;
