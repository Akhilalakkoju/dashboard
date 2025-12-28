import React from 'react'
// For interactive charts install `recharts`: npm install recharts
// Here are static SVG-based minimal charts to avoid extra deps

const MiniBar = ({ data }) => (
  <div className="flex items-end gap-1 h-24">
    {data.map((v, i) => (
      <div key={i} style={{ height: `${v}%` }} className="w-6 bg-blue-500 rounded" />
    ))}
  </div>
)

const AnalyticsCharts = () => {
  const sample = [20, 40, 70, 60, 90, 50, 80]
  return (
    <div className="bg-white dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700 p-4">
      <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-500 mb-2">Weekly Sales</div>
          <MiniBar data={sample} />
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-2">Ticket Types</div>
          <div className="flex gap-2">
            <div className="flex-1 bg-black text-white p-2 rounded flex items-center justify-between">
              <div>Online</div>
              <strong className="float-right">60%</strong>
            </div>
            <div className="flex-1 bg-black text-white p-2 rounded flex items-center justify-between">
              <div>Box Office</div>
              <strong className="float-right">40%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsCharts
