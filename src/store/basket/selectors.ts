import { RootState } from "store/store"

export const findBasketItemById = (id: string) => (state: RootState) => {
    return state.basket.basketPizzas.filter(obj => obj.id === id).reduce((sum, item) => item.count + sum, 0)
}