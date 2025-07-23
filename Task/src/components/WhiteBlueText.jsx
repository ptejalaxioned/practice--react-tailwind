import React from 'react';

const WhiteBlueText = ({ text, colorClass }) => {
  if (!text || typeof text !== 'string') return null; // Ensure valid input

  const words = text.split(' '); // Split text into words
  const midIndex = Math.ceil(words.length / 2); // Find middle word index

  const part1 = words.slice(0, midIndex).join(' ');
  const part2 = words.slice(midIndex).join(' ');

  return (
    <h2 className="white-blue-text">
      {part1} {part2 && <span className="blue-text">{part2}</span>}
    </h2>
  );
};

export default WhiteBlueText;
