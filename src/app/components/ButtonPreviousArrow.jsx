import React from 'react';

const ButtonPreviousArrow = ({ className, onClick }) => {
  return (
    <svg className={className} onClick={onClick} width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={20} cy={20} r={20} transform="matrix(-1 0 0 1 40 0)" fill="#151D28" />
      <path d="M23 11L14.7071 19.2929C14.3166 19.6834 14.3166 20.3166 14.7071 20.7071L23 29" stroke="white" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
};

export default ButtonPreviousArrow;
