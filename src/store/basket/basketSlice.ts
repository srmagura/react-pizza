import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pizzasPricesSum } from "@utils/pizzasBasketHelper";
import { BasketItem, BasketState } from "./types";

const initialState: BasketState = {
    basketPizzas: [],
    totalPrice: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addPizzaToBasket: (state, action: PayloadAction<BasketItem>) => {
            const findBasketItem = state.basketPizzas.find(obj => (
                (obj.id === action.payload.id) && 
                (obj.type === action.payload.type) && 
                (obj.size === action.payload.size)
            ))

            if (findBasketItem) {
                findBasketItem.count++
            } else {
                state.basketPizzas.push({
                    ...action.payload,
                    count: 1,
                })
            }
            
            state.totalPrice = pizzasPricesSum(state.basketPizzas)
        },
        minusPizzaFromBasket: (state, action: PayloadAction<BasketItem>) => {
            const findBasketItem = state.basketPizzas.find(obj => (
                (obj.id === action.payload.id) && 
                (obj.type === action.payload.type) && 
                (obj.size === action.payload.size)
            ))

            if (findBasketItem) {
                findBasketItem.count--
            }
            
            state.totalPrice = pizzasPricesSum(state.basketPizzas)
        },
        removePizzaFromBasket: (state, action: PayloadAction<BasketItem>) => {
            state.basketPizzas = state.basketPizzas.filter(obj => (
                (obj.id !== action.payload.id) || 
                (obj.type !== action.payload.type) || 
                (obj.size !== action.payload.size)
            )) 
            state.totalPrice = pizzasPricesSum(state.basketPizzas)
        },
        removeAllPizzasFromBasket: (state) => {
            state.basketPizzas = []
            state.totalPrice = 0
        }
    }
})


export const { addPizzaToBasket, minusPizzaFromBasket, removePizzaFromBasket, removeAllPizzasFromBasket } = basketSlice.actions

export default basketSlice.reducer