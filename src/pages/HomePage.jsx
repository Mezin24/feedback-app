import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackList from '../components/FeedbackList';

const HomePage = ({ onAddNewFeedback, feedback, onDeleteFeedback }) => {
  return (
    <>
      <FeedbackForm onAddNewFeedback={onAddNewFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} onDeleteFeedback={onDeleteFeedback} />
    </>
  );
};

export default HomePage;
