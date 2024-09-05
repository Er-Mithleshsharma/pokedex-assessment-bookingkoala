import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
const CustomProgressBar = ({stat}) => {
  return (
    <div key={stat.stat.name} className="w-full sm:w-1/2">
    <p className="text-center text-gray-600 text-lg font-medium">{stat.stat.name.toUpperCase()}</p>
    <ProgressBar
      completed={stat.base_stat}
      maxCompleted={150}
      bgColor="#6b46c1"
      baseBgColor="#e2e8f0"
      height="12px"
      className="rounded-full shadow-sm"
      labelClassName="hidden"
    />
  </div>
  )
}

export default CustomProgressBar