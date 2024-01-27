import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../redux/user/userSlice'
export default configureStore({
  reducer: {
    user: userSlice,
  },
})
