import React from 'react';

const Button = ({ children, className, type, ...otherProps }) => {
  return (
    <button className={`btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: 'btn-primary',
  type: 'button',
};

export default Button;
