// components/LoadMoreButton.js
"use client";

import React, { useState } from 'react';

const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <div className="mt-8">
      <button
        onClick={onLoadMore}
        className="px-6 py-2 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-900 transition"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
