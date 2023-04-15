import React from 'react';

const Circle = ({ x, y }) => {
  const style = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#000',
  };

  return <div style={style} />;
};

export default Circle;