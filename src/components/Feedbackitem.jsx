import PropTypes from 'prop-types';
import Card from './UI/Card';
import { FaTimes } from 'react-icons/fa';

const FeedbackItem = ({ id, rating, text, onDeleteFeedback }) => {
  return (
    <Card className='card'>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => onDeleteFeedback(id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

FeedbackItem.prototype = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default FeedbackItem;
