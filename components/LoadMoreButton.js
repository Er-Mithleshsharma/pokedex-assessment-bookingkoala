"use client";

import { useRouter, useSearchParams } from 'next/navigation';

const LoadMoreButton = ({ offset }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLoadMore = () => {
    const currentOffset = parseInt(offset || '0', 10);
    const newOffset = currentOffset + 20;

    // Clone the current search parameters and update the 'offset'
    const params = new URLSearchParams(searchParams.toString());
    params.set('offset', newOffset.toString());

    // Push the new URL with updated search parameters (offset)
    router.push(`/?offset=${newOffset}`);
  };

  return (
    <button
      onClick={handleLoadMore}
      className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200"
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;