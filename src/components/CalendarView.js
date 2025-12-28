import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = { 'en-US': enUS }
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales })

const CalendarView = () => {
  const events = [
    { id: 0, title: 'Avengers — 7:00 PM', start: new Date(2025, 11, 28, 19, 0), end: new Date(2025, 11, 28, 21, 0) },
    { id: 1, title: 'Inception — 4:00 PM', start: new Date(2025, 11, 29, 16, 0), end: new Date(2025, 11, 29, 18, 30) },
    { id: 2, title: 'Matrix — 1:00 PM', start: new Date(2025, 11, 30, 13, 0), end: new Date(2025, 11, 30, 15, 0) }
  ]

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#e5e7eb', // gray-200
      color: '#0f172a', // dark text
      border: '1px solid #cbd5e1',
      borderRadius: '6px',
      padding: '2px'
    }
    return { style }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700 p-4">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Calendar</h3>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventStyleGetter}
          style={{ height: 500 }}
        />
      </div>
    </div>
  )
}

export default CalendarView
