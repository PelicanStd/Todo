import Todo from '~/components/Todo.jsx'
import AddTodo from '~/components/AddTodo.jsx'
import { MainStore } from '~/store/mainStore.jsx'
import DeletedTodos from '~/ApiNet/DeletedTodos.jsx'
import AddTodosNet from '~/ApiNet/AddTodosNet.jsx'
import { UpdateTodos } from '~/ApiNet/UpdateTodos.jsx'
import { useEffect } from 'react'

export default function TodoList({ filter }) {
  const [todos, setTodos, fetch] = MainStore((state) => [state.todos, state.setTodos, state.fetch])
  useEffect(() => {
    fetch()
  }, [])

  const handelAdd = async (title) => {
    await AddTodosNet(title)
    await fetch()
  }
  const handleUpdate = async (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))
    await UpdateTodos(updated)
  }
  const handleDelete = async (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id))
    await DeletedTodos(deleted.id)
  }

  const filtered = getFilteredItems(todos, filter)

  return (
    <section className={'h-[100%] min-h-0 flex flex-col bg-[#fdfffd]'}>
      <ul className={'flex flex-col shrink grow basis-auto overflow-y-auto'}>
        {
            filtered.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
            ))
        }
      </ul>
      <AddTodo onAdd={handelAdd} />
    </section>
  )
}
function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos
  }
  return todos.filter((todo) => todo.done === filter)
}
