import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export interface ITodo {
  id: string
  message: string
  status: boolean
  createdAt: string
}

interface CounterState {
  todos: ITodo[]
}

const initialState: CounterState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo({ todos }, { payload }: PayloadAction<{ message: string; createdAt: string }>) {
      const isThisTodoExistent = todos.find(
        ({ message }) => message.toLowerCase() === payload.message.toLowerCase(),
      )
      if (isThisTodoExistent) return

      todos.push({
        id: uuidv4(),
        message: payload.message,
        status: false,
        createdAt:
          new Date(payload.createdAt).toLocaleDateString() +
          ' ' +
          new Date(payload.createdAt).toLocaleTimeString(),
      })
    },

    updateTodo({ todos }, { payload }: PayloadAction<{ id: string; message: string }>) {
      const isThisTodoExistent = todos.find(
        ({ message }) => message.toLowerCase() === payload.message.toLowerCase(),
      )
      if (isThisTodoExistent) return

      const todo = todos.find(({ id }) => id === payload.id)!
      todo.message = payload.message
    },

    toggleTodo({ todos }, { payload }: PayloadAction<string>) {
      const todo = todos.find(({ id }) => id === payload)!
      todo.status = !todo.status
    },

    deleteTodo(state, { payload }: PayloadAction<string>) {
      state.todos = state.todos.filter(({ id }) => id !== payload)
    },
  },
})

export const { addTodo, updateTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
