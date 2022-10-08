import { useState } from 'react';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeedbackData from './data';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

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

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <HomePage
              onAddNewFeedback={addNewFeedback}
              feedback={feedback}
              onDeleteFeedback={deleteFeedback}
            />
          }
        />
        <Route path='about' element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
