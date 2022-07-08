import { BasketItem } from '../store/basket/types'

export const pizzasPricesSum = (pizzas: BasketItem[]) => {
    return pizzas.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
}
