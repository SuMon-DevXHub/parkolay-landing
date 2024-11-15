import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div 
    className="flex justify-center items-center min-h-[200px]"
    role="status"
    aria-label="Loading content"
  >
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#05B6C7]"></div>
  </div>
);

export default LoadingSpinner;