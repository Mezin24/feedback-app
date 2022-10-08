import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RatingSelect from './RatingSelect';
import Card from './UI/Card';
import Button from './UI/Button';

const FeedbackForm = ({ onAddNewFeedback }) => {
  const [textInput, setTextInput] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

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
      id: uuidv4(),
      rating,
      text: textInput,
    };

    onAddNewFeedback(newFeedback);
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
