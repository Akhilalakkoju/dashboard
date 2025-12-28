import React from 'react'

const Topbar = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden px-2 py-1 rounded bg-gray-100 dark:bg-gray-700">☰</button>
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Admin Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <input placeholder="Search..." className="hidden sm:inline-block px-3 py-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm" />
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
    </header>
  )
}

export default Topbar
