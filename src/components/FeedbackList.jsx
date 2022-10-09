import PropTypes from 'prop-types';
import FeedbackItem from './Feedbackitem';
import { useFeedbackContext } from '../context/feedbackContext';
import { motion, AnimatePresence } from 'framer-motion';
import Spinner from '../components/UI/Spinner';

const FeedbackList = () => {
  const { feedback, isLoading } = useFeedbackContext();

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p style={{ textAlign: 'center' }}>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} {...item} />
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
