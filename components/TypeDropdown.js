"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TypeDropdown({ types,str, currentType }) {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState(currentType || "");

  // Handle type change
  const handleChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    router.push(`/${str}/${newType}`); // Navigate to the selected type's URL
  };

  return (
    <select
      value={selectedType}
      onChange={handleChange}
      className="p-2 rounded border text-black"
    >
      <option value="" disabled>
        Select a type
      </option>
      {types.map(type => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
