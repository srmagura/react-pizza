import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { ErrorType, Pizza, PizzaParams } from "./types"

export const fetchPizzas = createAsyncThunk<Pizza[], PizzaParams, { rejectValue: ErrorType }>(
    'pizzas/fetchPizzasStatus',
    async (obj, { rejectWithValue }) => {
        try {
            const { category, search, sortBy, order, page } = obj
            const { data } = await axios.get<Pizza[]>(`https://62b98129ff109cd1dc93c9b5.mockapi.io/pizzas`, {
                params: {
                    page,
                    limit: 4,
                    category,
                    sortBy,
                    order,
                    search,
                }
            })
            return data
        } catch (error) {
            return rejectWithValue(error as ErrorType)
        }
    }
)