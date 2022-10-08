const RatingSelect = ({ rating, hadleRatingChange }) => {
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => {
        const currentNumber = i + 1;
        return (
          <li key={i}>
            <input
              type='radio'
              name='rating'
              id={`rating-${currentNumber}`}
              value={currentNumber}
              checked={rating === currentNumber}
              onChange={() => hadleRatingChange(currentNumber)}
            />
            <label htmlFor={`rating-${currentNumber}`}>{currentNumber}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingSelect;
