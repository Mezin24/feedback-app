import PropTypes from 'prop-types';
import FeedbackItem from './Feedbackitem';

const FeedbackList = ({ feedback, onDeleteFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p style={{ textAlign: 'center' }}>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          {...item}
          onDeleteFeedback={onDeleteFeedback}
        />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
