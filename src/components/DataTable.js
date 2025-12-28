import React, { useMemo, useState } from 'react'

const initialData = Array.from({ length: 18 }).map((_, i) => ({ id: i + 1, name: `User ${i + 1}`, tickets: Math.floor(Math.random() * 5) + 1, revenue: (Math.random() * 100).toFixed(2) }))

const DataTable = () => {
  const [data, setData] = useState(initialData)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 6

  const filtered = useMemo(() => data.filter(d => d.name.toLowerCase().includes(query.toLowerCase())), [data, query])
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize)

  const addRow = () => {
    const next = { id: Date.now(), name: `User ${data.length + 1}`, tickets: 1, revenue: '0.00' }
    setData(d => [next, ...d])
  }

  const remove = (id) => setData(d => d.filter(x => x.id !== id))

  return (
    <div className="bg-white dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button onClick={addRow} className="px-3 py-1 bg-blue-500 text-white rounded">Add</button>
          <input value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} placeholder="Filter by name" className="px-2 py-1 border rounded" />
        </div>
        <div className="text-sm text-gray-500">{filtered.length} results</div>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600 dark:text-gray-300">
            <th className="pb-2">Name</th>
            <th className="pb-2">Tickets</th>
            <th className="pb-2">Revenue</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map(r => (
            <tr key={r.id} className="border-t border-gray-100 dark:border-gray-700">
              <td className="py-2">{r.name}</td>
              <td className="py-2">{r.tickets}</td>
              <td className="py-2">${r.revenue}</td>
              <td className="py-2">
                <button onClick={() => remove(r.id)} className="text-red-500 mr-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-gray-500">Page {page} / {pageCount}</div>
        <div className="flex gap-2">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} className="px-2 py-1 border rounded">Prev</button>
          <button onClick={() => setPage(p => Math.min(pageCount, p + 1))} className="px-2 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  )
}

export default DataTable
