import { configureStore } from '@reduxjs/toolkit'
import{ userSlice} from './slices/userSlice.jsx';
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})
