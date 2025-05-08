import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import store, { type RootState } from '~/store/store'

interface TodoSlipeState {
  isLoading: boolean;
  value: number;
  errorMessage: string;
  hasError: boolean;
  todos: [string];
}

const initialState: TodoSlipeState = {
  isLoading: false,
  value: 0,
  errorMessage: '',
  hasError: false,
  todos: ["String array. Replace with TODO array.."]
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload
    },
    clearError: (state) => {
      state.errorMessage = ''
      state.hasError = false
    },
    clearState: (state) => {
      state.isLoading = false
      state.value = 0
      state.errorMessage = ''
      state.hasError = false
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = todoSlice.actions;
export const selectAuthCount = (state: RootState) => state.todo.value; 
export default todoSlice.reducer;