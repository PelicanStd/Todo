import { MainStore } from '~/store/mainStore.jsx'
import DeletedTodos from '~/ApiNet/DeletedTodos.jsx'

export default function Header({filters,filter,onFilterChange}) {
  const [todos,fetch] = MainStore((state) => [state.todos,state.fetch])

  const handelAllDelete = () => {
    todos.map((todo) => {
      todo.done === true && DeletedTodos(todo.id)
      fetch()
    })
  }

  return (
    <header className={'flex mt-2 justify-between items-center border-b-4 border-[#f5f5f5]'}>
      <ul className={'flex'}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              id={'filter'}
              className={`ml-2 mr-4 btn btn-ghost text-[1.4rem] text-orange-600 capitalize bg-transparent`}
              onClick={()=>{
                onFilterChange(value)
              }}
            >
              {valueChange(value)}
            </button>
          </li>
        ))}
        {
          filter === true && <button
            className={'btn btn-primary py-0 select'}
            onClick={handelAllDelete}
          >전체삭제</button>
        }
      </ul>
    </header>
  );
}

function valueChange(value) {
  if (value === false) {
    return 'Active'
  } else if (value === true) {
    return 'Completed'
  } else {
    return 'All'
  }
}
