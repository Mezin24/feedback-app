import { useContext, useState, createContext, useEffect } from 'react';
import feedbackData from '../data';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    feedback: {},
  });

  const fetchFeedabck = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
  };

  useEffect(() => {
    fetchFeedabck();
    setIsLoading(false);
  }, []);

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      });
      setFeedback((prevFeedback) =>
        prevFeedback.filter((item) => item.id !== id)
      );
    }
  };

  const addNewFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
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

  const updateFeedback = async (id, updItem) => {
    setFeedbackEdit({
      edit: false,
      feedback: {},
    });
    const updatedFeedback = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedFeedback } : item
      )
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => useContext(FeedbackContext);
