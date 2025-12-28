import React from 'react'

const StatCard = ({ title, value, icon, color }) => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
    <div className={`p-3 rounded ${color} text-white`}>{icon}</div>
    <div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{value}</div>
    </div>
  </div>
)

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard title="Users" value="1,245" icon="👥" color="bg-blue-500" />
      <StatCard title="Tickets Sold" value="8,430" icon="🎟️" color="bg-green-500" />
      <StatCard title="Revenue" value="$124,230" icon="💵" color="bg-purple-500" />
    </div>
  )
}

export default Cards
