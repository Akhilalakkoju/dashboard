import React, { useState } from 'react'
// For full drag-and-drop: install @hello-pangea/dnd (compatible fork)
// npm install @hello-pangea/dnd
// This simple version does not require extra packages and provides columns

const initial = {
  backlog: [{ id: 1, title: 'Add movies seed' }, { id: 2, title: 'Import users' }],
  inprogress: [{ id: 3, title: 'Payment integration - verify gateway and callbacks' }],
  done: [{ id: 4, title: 'Landing page' }]
}

const Column = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-800 rounded p-3 flex-1 min-w-0 border border-gray-100 dark:border-gray-700 flex flex-col min-h-[120px]">
    <div className="font-semibold text-sm mb-2 text-gray-700 dark:text-gray-200 kanban-title">{title}</div>
    <div className="flex flex-col gap-2 mt-1">
      {items.map(it => (
        <div key={it.id} className="p-2 bg-gray-50 dark:bg-gray-900 rounded border border-gray-100 dark:border-gray-700 text-sm whitespace-normal">
          <div className="kanban-card-text">{it.title}</div>
        </div>
      ))}
    </div>
  </div>
)

const KanbanBoard = () => {
  const [cols] = useState(initial)
  return (
    <div className="bg-white dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700 p-4">
      <h3 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Kanban</h3>
      <div className="flex gap-3 items-start overflow-x-auto">
        <Column title="Backlog" items={cols.backlog} />
        <Column title="In Progress" items={cols.inprogress} />
        <Column title="Done" items={cols.done} />
      </div>
    </div>
  )
}

export default KanbanBoard
