'use client'

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/store/store';
import type { UserType } from '~/types/user';

interface AuthSliceState {
  isLoading: boolean;
  value: number;
  isLoggedIn: boolean;
  currentUser: UserType | null;
}

const isBrowser = typeof window !== 'undefined';
const isLoggedInStorage = isBrowser ? localStorage.getItem('isLoggedIn') : null;
const currentUserStorage = isBrowser ? localStorage.getItem('currentUser') : null;

const initialState: AuthSliceState = {
  isLoading: false,
  value: 0,
  isLoggedIn: isLoggedInStorage === 'true',
  currentUser: currentUserStorage ? JSON.parse(currentUserStorage) : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.currentUser = action.payload;
      if (typeof window !== 'undefined') {
        if (action.payload !== null) {
          localStorage.setItem('currentUser', JSON.stringify(action.payload));
        } else {
          localStorage.removeItem('currentUser');
        }
      }
    },

    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
        state.isLoggedIn = action.payload;
        console.log('isLoggedIn', action.payload);
        console.log('window', window.localStorage);
        if ( action.payload !== null ) {
            window.localStorage.setItem('isLoggedIn', 'true');
        } else {
            window.localStorage.removeItem('isLoggedIn');
            window.localStorage.removeItem('currentUser');
        }
    },

    clearState: (state) => {
      state.isLoading = false;
      state.value = 0;
      state.isLoggedIn = false;
      state.currentUser = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
      }
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setLoading,
  setUser,
  setIsLoggedIn,
  clearState,
} = authSlice.actions;

export const selectAuthCount = (state: RootState) => state.auth.value;
export default authSlice.reducer;
