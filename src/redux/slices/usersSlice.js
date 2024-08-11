import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, name: 'Afan' },
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Kamran' },
];

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
});

export const selectAllUsers = (state) => state.users;

export default slice.reducer;