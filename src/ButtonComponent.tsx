import React from 'react';

const ButtonComponent: React.FC = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Dont Click
    </button>
  );
};

export default ButtonComponent;