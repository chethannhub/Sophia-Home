import React from 'react';

const Call_to_action = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0D1117] px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Your Learning Experience, Customized
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-md mx-auto">
          Designed for the modern tech professional: We curate, summarize, and deliver
          the latest insights in a format that suits you. Engage with your chosen persona to
          deepen your understanding.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all">
            GetStarted
          </button>
        </div>
      </div>
    </div>
  );
};

export default Call_to_action;
