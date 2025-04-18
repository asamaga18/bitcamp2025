import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Post from './Post/Post';
import Chat from './Messaging/Chat';
import Home from './Home/Home';
import Browse from './Browse/Browse';
import Account from './Account/Account';
import './App.css';

const LandingPage = () => (
  <div className="landing-container">
    <div className="landing-content">
      <h1>Welcome to The Tomato Trade</h1>
      <p className="landing-subtitle">Share your excess produce with your community</p>
      <div className="landing-buttons">
        <Link to="/login" className="landing-btn primary">Sign In</Link>
        <Link to="/signup" className="landing-btn secondary">Create Account</Link>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/post" element={<Post />} />
        <Route path="/messages" element={<Chat />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
