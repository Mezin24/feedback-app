import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      setFeedback((prevFeedback) =>
        prevFeedback.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} onDeleteFeedback={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
