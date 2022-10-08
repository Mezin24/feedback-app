import React from 'react';
import ReactDOM from 'react-dom/client';
import { FeedbackProvider } from './context/feedbackContext';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FeedbackProvider>
      <Router>
        <App />
      </Router>
    </FeedbackProvider>
  </React.StrictMode>
);
