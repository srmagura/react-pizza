import { createSlice } from "@reduxjs/toolkit"
import { __String } from "typescript"
import { fetchPizzas } from "./pizzaAsyncThunk"
import { PizzasState } from "./types"

const initialState: PizzasState = {
    pizzas: [],
    loading: 'off',
    error: null
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.loading = 'on';
            state.pizzas = [];
            state.error = null;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.loading = 'off';
            state.pizzas = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.loading = 'off';
            state.pizzas = [];
            if (action.payload) {
                state.error = action.payload.message
            } else {
                state.error = action.error.message
            }
        });
    }
})

export default pizzasSlice.reducer