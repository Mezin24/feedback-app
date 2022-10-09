import { useContext, useState, createContext } from 'react';
import feedbackData from '../data';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    feedback: {},
  });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback((prevFeedback) =>
        prevFeedback.filter((item) => item.id !== id)
      );
    }
  };

  const addNewFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    const { id, text, rating } = item;
    setFeedbackEdit({
      edit: true,
      feedback: {
        id,
        text,
        rating,
      },
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedbackEdit({
      edit: false,
      feedback: {},
    });
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addNewFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);
