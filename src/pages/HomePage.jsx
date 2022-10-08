import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackList from '../components/FeedbackList';
import AboutIconLink from '../components/AboutIconLink';

const HomePage = () => {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
      <AboutIconLink />
    </>
  );
};

export default HomePage;
