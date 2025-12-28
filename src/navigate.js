import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'

const Navigate = () => {
    return (
        <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Link to="/" className="text-sm text-gray-700 dark:text-gray-300">Home</Link>
                <Link to="/about" className="text-sm text-gray-700 dark:text-gray-300">About</Link>
                <Link to="/dashboard" className="text-sm text-gray-700 dark:text-gray-300">Dashboard</Link>
            </div>
            <div className="flex items-center gap-2">
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navigate