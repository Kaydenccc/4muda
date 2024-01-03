import React from 'react';

const Search = ({ className }) => {
  return (
    <span className="flex justify-center items-center w-10">
      <svg className={className} width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.683 24.062C18.8592 24.062 23.866 19.0552 23.866 12.879C23.866 6.70278 18.8592 1.69598 12.683 1.69598C6.5068 1.69598 1.5 6.70278 1.5 12.879C1.5 19.0552 6.5068 24.062 12.683 24.062Z" stroke="#151D28" strokeWidth={3} />
        <path d="M22.008 21.159L34.733 33.884" stroke="#151D28" strokeWidth={3} strokeLinecap="round" />
      </svg>
    </span>
  );
};

export default Search;
