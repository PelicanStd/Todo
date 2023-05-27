import React, { useState } from 'react';

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('')
  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd(text)
    setText('')
  }

  return (
    <form
      className={'w-full flex py-[1.4rem] px-[1rem] bg-[#f5f5f5]'}
      onSubmit={handleSubmit}
    >
      <input
        className={'flex shrink grow basis-auto text-[1.4rem] py-[0.7rem] px-[1rem] border-0 outline-0 rounded-[8px]'}
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button className={'btn btn-outline btn-accent bold text-[1.4rem] ml-4 rounded-[8px]'}>Add</button>
    </form>
  );
}
