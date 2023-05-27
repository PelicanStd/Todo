import TodoList from '~/components/TodoList.jsx'
import Header from '~/components/Header.jsx'
import {  useState } from 'react'

const filters = ['all', false, true]
export default function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter}/>
    </>
  )
}


