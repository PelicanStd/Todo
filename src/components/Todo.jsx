import { FaTrashAlt } from 'react-icons/fa'

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, title, done, updatedAt } = todo


  const timer = () => {
    const pastDate = new Date(updatedAt);
    const now = new Date();
    const diffInMs = now - pastDate;
    const diffInSec = Math.floor(diffInMs / 1000);
    const diffInMin = Math.floor(diffInSec / 60);
    const diffInHrs = Math.floor(diffInMin / 60);
    const diffInDays = Math.floor(diffInHrs / 24);
    let message = '';
    if (diffInDays > 0) {
      message += `${diffInDays} 일 `;
    }
    if (diffInHrs > 0) {
      message += `${diffInHrs % 24} 시간 `;
    }
    if (diffInMin > 0) {
      message += `${diffInMin % 60} 분`;
    }
    message += '전에 작성.';
    return message
  }


  const handleChange = (e) => {
    const done = !!e.target.checked
    onUpdate({ id, title, done })
  }
  const handleTextChange = (e) => {
    const title = e.target.value
    onUpdate({ id, title, done })
  }
  const handleDelete = () => onDelete(todo)

  return (
    <li
      className={'flex justify-between items-center py-[0.5rem] px-[1rem] my-[0.1rem] mx-0 text-[#22243b]'}
    >
      <input
        type='checkbox'
        className='checkbox checkbox-info w-[1.5rem] h-[1.5rem]'
        checked={done}
        onChange={handleChange}
      />
      <input
        type='text'
        value={title}
        onChange={handleTextChange}
        className={'flex shrink grow basis-0 ml-[0.5rem] text-[1.5rem] ' }
      />
      <span className={'text-[12px] text-amber-500'}>{timer()}</span>
      <span
        className={'flex justify-center w-[30px] h-[30px] rounded-full  bg-[#d1d1d1] transition-all ' +
          'hover:bg-[#f16e03] hover:rotate-[15deg] hover:scale-[1.2]]'}>
        <button
          className={'bg-transparent text-[#22243b]'}
          onClick={handleDelete}
        >
          <FaTrashAlt />
        </button>
      </span>
    </li>
  )
}
