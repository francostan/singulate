import React from "react";

const RightSidebar = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className="bg-white text-black w-full min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-xl mb-4">Add features</h1>
      <button className="w-full mb-2 py-2 px-4 bg-white text-purple-600 rounded-full hover:bg-purple-200 flex items-start">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20v-1a7 7 0 00-7-7H8a7 7 0 00-7 7v1"
          />
        </svg>
        Smart Tag
      </button>
      <button className="w-full mb-2 py-2 px-4 bg-white text-purple-600 rounded-full hover:bg-purple-200 flex items-start"
      onClick={() => openModal()}>
      <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20v-1a7 7 0 00-7-7H8a7 7 0 00-7 7v1"
          />
        </svg>
        Branched Paragraph
      </button>
      <button className="w-full py-2 px-4 bg-white text-purple-600 rounded-full hover:bg-purple-200 flex items-start">
      <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20v-1a7 7 0 00-7-7H8a7 7 0 00-7 7v1"
          />
        </svg>
        Singulared Text
      </button>
    </div>
  );
};

export default RightSidebar;
