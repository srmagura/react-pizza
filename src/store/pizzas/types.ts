export interface PizzasState {
    pizzas: Pizza[] | undefined;
    loading: 'on' | 'off';
    error: null | string | undefined;
}

interface PizzaPrice {
    [key: string]: {
        [key: string]: number
    }
}

export interface Pizza {
    id: string;
    title: string;
    price: PizzaPrice;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

export interface ErrorType {
    message: string;
}

export type PizzaParams = {
    category: string;
    search: string;
    sortBy: string;
    order: string;
    page: string;
}