


export default async function DeletedTodos(todoId) {
  console.log(todoId)
  try {
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B',
          'username': 'KDT5_ChoiYongJun'
        }
      })
    const json = await res.json()
    return json
  } catch (error) {
    console.log('Error deleting a todo:', error)
  }
}

