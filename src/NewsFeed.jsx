import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignContext } from './App';

function NewsFeed() {
  const { user } = useContext(SignContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert('You need to login first!');
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="newsfeed-container">
      <header className="newsfeed-header">
        <h1>NewsFeed</h1>
        <p>Welcome back, {user.email}!</p>
      </header>
      <div className="newsfeed-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><a href="#profile">Profile</a></li>
              <li><a href="#network">My Network</a></li>
              <li><a href="#jobs">Jobs</a></li>
              <li><a href="#messages">Messages</a></li>
              <li><a href="#notifications">Notifications</a></li>
              <li><a href="#settings">Settings</a></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <article className="post">
            <h2>5 Tips to Build a Strong LinkedIn Profile</h2>
            <p>Having a strong LinkedIn profile is essential for professional networking. Here are 5 tips to help you create a profile that stands out:</p>
            <ul>
              <li>Use a professional profile picture</li>
              <li>Write a compelling headline</li>
              <li>Detail your work experience with accomplishments</li>
              <li>Get endorsements and recommendations</li>
              <li>Keep your profile updated</li>
            </ul>
          </article>
          <article className="post">
            <h2>How to Expand Your Professional Network on LinkedIn</h2>
            <p>Expanding your professional network can open up new opportunities. Here's how you can do it:</p>
            <ul>
              <li>Connect with colleagues and classmates</li>
              <li>Join LinkedIn groups related to your industry</li>
              <li>Participate in discussions and share valuable content</li>
              <li>Attend virtual networking events</li>
              <li>Follow industry leaders and companies</li>
            </ul>
          </article>
          <article className="post">
            <h2>Job Search Strategies for LinkedIn</h2>
            <p>LinkedIn is a powerful tool for job searching. Here are some strategies to help you find your next job:</p>
            <ul>
              <li>Utilize LinkedIn's job search feature and filters</li>
              <li>Set up job alerts to get notified about new opportunities</li>
              <li>Reach out to recruiters and hiring managers</li>
              <li>Showcase your skills and endorsements</li>
              <li>Engage with company posts and updates</li>
            </ul>
          </article>
        </main>
      </div>
    </div>
  )
}

export default NewsFeed;
