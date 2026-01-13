
import React from 'react';
import { TrackingError } from '../types';

interface ErrorMessageProps {
  error: TrackingError;
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onRetry }) => {
  const isQuota = error.type === 'QUOTA_EXCEEDED';

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl border-l-4 border-red-500 p-8 flex flex-col md:flex-row gap-6 items-center md:items-start animate-in zoom-in-95 duration-300">
      <div className={`w-16 h-16 rounded-2xl ${isQuota ? 'bg-orange-50' : 'bg-red-50'} flex items-center justify-center flex-shrink-0`}>
        {isQuota ? (
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {error.type.replace('_', ' ')}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {error.message}
        </p>
        <button 
          onClick={onRetry}
          className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
        >
          Try Different Number
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
