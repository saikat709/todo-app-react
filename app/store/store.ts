import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '~/features/auth/authSlice'
import { todoSlice } from '~/features/todo/todoSlice'
// ...

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    auth: authSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store