import PropTypes from 'prop-types';
import FeedbackItem from './Feedbackitem';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackList = ({ feedback, onDeleteFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p style={{ textAlign: 'center' }}>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              {...item}
              onDeleteFeedback={onDeleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
