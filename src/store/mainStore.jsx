import { create } from 'zustand'

export const MainStore =
  create(((set) => ({
    todos: [],
    fetch: async () => {
      const url = "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos"
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B', // KDT 5기 APIKEY 입니다!
          'username': 'KDT5_ChoiYongJun'
        }
      })

      const imsi = await res.json()
      set({todos: imsi})
    },
    setTodos: (todos) => set({todos}),
})))







