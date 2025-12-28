import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      document.body.setAttribute('data-theme', 'dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      document.body.removeAttribute('data-theme')
      localStorage.theme = 'light'
    }
    // debug: log current class presence
    // eslint-disable-next-line no-console
    console.log('theme:', dark ? 'dark' : 'light', 'html classList:', document.documentElement.className)
  }, [dark])

  return (
    <button onClick={() => setDark(d => !d)} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
      {dark ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
