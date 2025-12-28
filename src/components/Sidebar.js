import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 min-h-screen p-4 hidden md:block">
      <div className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">MovieAdmin</div>
      <nav className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
        <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Dashboard</Link>
        <Link to="/" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Home</Link>
        <Link to="/about" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">About</Link>
        <Link to="/form" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Create Booking</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
