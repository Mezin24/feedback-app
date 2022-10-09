import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RatingSelect from './RatingSelect';
import Card from './UI/Card';
import Button from './UI/Button';
import { useFeedbackContext } from '../context/feedbackContext';

const FeedbackForm = () => {
  const [textInput, setTextInput] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);
  const { addNewFeedback, feedbackEdit, updateFeedback } = useFeedbackContext();

  useEffect(() => {
    setBtnDisabled(false);
    setTextInput(feedbackEdit.feedback.text);
    if (feedbackEdit.feedback.rating) {
      setRating(feedbackEdit.feedback.rating);
    } else {
      setRating(10);
    }
  }, [feedbackEdit]);

  useEffect(() => {
    setMessage('');
    setBtnDisabled(true);
    const timer = setTimeout(() => {
      if (textInput.trim() === '') {
        setBtnDisabled(true);
        setMessage('');
      } else if (textInput.trim().length < 10) {
        setBtnDisabled(true);
        setMessage('Text must be at least 10 characters');
      } else {
        setBtnDisabled(false);
        setMessage('');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [textInput]);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      rating,
      text: textInput,
    };

    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.feedback.id, newFeedback);
    } else {
      newFeedback.id = uuidv4();
      addNewFeedback(newFeedback);
    }

    setTextInput('');
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleSubmit}>
        <RatingSelect
          rating={rating}
          hadleRatingChange={(value) => setRating(value)}
        />
        <div className='input-group'>
          <input type='text' value={textInput} onChange={handleChange} />
          <Button type='submit' disabled={btnDisabled}>
            Send
          </Button>
        </div>
        <div className='message'>{message}</div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
