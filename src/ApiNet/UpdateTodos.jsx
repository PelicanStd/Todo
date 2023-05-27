

export async function UpdateTodos(newTodo)
{
  try {
    const res = await fetch(
      `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${newTodo.id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B',
          'username': 'KDT5_ChoiYongJun'
        },
        body: JSON.stringify({
          title: newTodo.title,
          done: newTodo.done
        })
      }
    )
    const json = await res.json()
    return json

  } catch (error) {
    console.log('Error creating a todo:', error)
  }
}