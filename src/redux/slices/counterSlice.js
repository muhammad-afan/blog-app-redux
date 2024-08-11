import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += 1;
        },
        decrement(state, action) {
            state.count -= 1;
        },
        reset(state, action) {
            state.count = 0;
        },
        incrementByAmount(state, action) {
            state.count += action.payload;
        }
    }
});

// export default counterSlice.reducer;
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;