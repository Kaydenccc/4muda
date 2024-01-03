import React from 'react';

const ButtonNextArrow = ({ className, onClick }) => {
  return (
    <svg onClick={onClick} className={className} width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={20} cy={20} r={20} fill="#151D28" />
      <path d="M17 11L25.2929 19.2929C25.6834 19.6834 25.6834 20.3166 25.2929 20.7071L17 29" stroke="white" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
};

export default ButtonNextArrow;
