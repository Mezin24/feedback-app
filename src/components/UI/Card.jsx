import PropTypes from 'prop-types';

const Card = ({ children, className }) => {
  return <div className={`${className} card`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
