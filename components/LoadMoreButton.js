// components/LoadMoreButton.js
"use client";

import React, { useState } from 'react';

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <div className="mt-8">
      <button
        onClick={onLoadMore}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-purple-500 transition"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
