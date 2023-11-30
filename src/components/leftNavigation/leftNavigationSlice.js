import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Dashboard',
}

export const headerSlice = createSlice({
    name: 'headerTitle',
    initialState,
    reducers: {
        selHeaderTitle: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { selHeaderTitle } = headerSlice.actions;

export const headerTitle = (state) => state.headerTitle.value

export default headerSlice.reducer