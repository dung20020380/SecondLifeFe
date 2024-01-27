import { createSlice } from '@reduxjs/toolkit'
export type userState = {
    id: string,
    name?: string,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: "",
    name: "",
  },
  reducers: {
    addId: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.id = action.payload
    },
    addName: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes.
        // Also, no return statement is required from these functions.
        state.name = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { addId, addName } = userSlice.actions

export default userSlice.reducer