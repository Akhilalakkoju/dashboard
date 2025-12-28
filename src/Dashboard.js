import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Cards from './components/Cards'
import CalendarView from './components/CalendarView'
import KanbanBoard from './components/KanbanBoard'
import AnalyticsCharts from './components/AnalyticsCharts'
import DataTable from './components/DataTable'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark') || document.body.classList.contains('dark'))
        check()
        // observe changes to <html> class
        const obs = new MutationObserver(() => check())
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
        return () => obs.disconnect()
    }, [])
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Topbar />
                    <main className="p-4">
                        <div className="mb-2 text-sm">
                            Theme: <strong>{isDark ? 'dark' : 'light'}</strong>
                        </div>
                        <div className="mb-4">
                            <Cards />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                            <div className="lg:col-span-2">
                                <AnalyticsCharts />
                                <div className="mt-4">
                                    <CalendarView />
                                </div>
                            </div>
                            <div>
                                <KanbanBoard />
                            </div>
                        </div>

                        <div>
                            <DataTable />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Dashboard