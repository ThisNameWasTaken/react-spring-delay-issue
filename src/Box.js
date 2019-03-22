import React from 'react';
import { animated, useSpring, interpolate } from 'react-spring';
import './Box.scss';

const Box = () => {
  const [{ x, y }, setSpring] = useSpring(() => ({
    x: 1,
    y: 1,
  }));

  return (
    <animated.div
      className="box"
      onClick={event => {
        setSpring({ x: 3, y: 2 });
      }}
      style={{
        transform: interpolate([x, y], (x, y) => `scaleX(${x}) scaleY(${y})`),
      }}
    />
  );
};

export default Box;
