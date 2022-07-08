import Button from '@components/UI/Button/Button'
import { finalPrice } from '@utils/priceFormat'
import React, { FC,  useState} from 'react'
import styles from './PizzaCard.module.scss'
import { Pizza } from 'store/pizzas/types'
import { typeNames } from '@utils/pizzaInfo'
import { useAppDispatch, useAppSelector } from 'store/store'
import { addPizzaToBasket } from 'store/basket/basketSlice'
import { findBasketItemById } from 'store/basket/selectors'

interface PizzaProps {
    item: Pizza
}

const PizzaCard: FC<PizzaProps> = ({ item }) => {

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    const dispatch = useAppDispatch()
    const basketItem = useAppSelector(findBasketItemById(item.id))

    const types = item.types.map(type => (
        <li 
            key={type} 
            onClick={() => setActiveType(type)}
            className={activeType === type ? styles.active : ''}
        >
            {typeNames[type]}
        </li>
    ))

    const sizes = item.sizes.map((size, ind) => (
        <li 
            key={size}
            onClick={() => setActiveSize(ind)}
            className={activeSize === ind ? styles.active : ''}
        >
            {size} см
        </li>
    ))

    const specificPizzaPrice = item.price[typeNames[activeType]][item.sizes[activeSize]] 

    const price = finalPrice(specificPizzaPrice)
    
    const handleAddPizzaToBasket = () => {
        const { id, title, price, imageUrl, sizes } = item

        const pizza = {
            id,
            title,
            price: price[typeNames[activeType]][sizes[activeSize]],
            imageUrl,
            type: typeNames[activeType],
            size: sizes[activeSize],
            count: 0,
        }

        dispatch(addPizzaToBasket(pizza))
    }

    return (
        <div className={styles.pizza}>
            <img src={item.imageUrl} alt={item.imageUrl} />
            <div className={styles.pizza__name}>{item.title}</div>
            <div className={styles.pizza__rating}>Рейтинг: {item.rating}</div>
            <div className={styles.pizza__info}>
                <ul>
                    {types}
                </ul>
                <ul>
                    {sizes}
                </ul>
            </div>
            <div className={styles.pizza__footer}>
                <div className={styles.pizza__footer__price}>от {price}</div>
                <Button onClick={handleAddPizzaToBasket} addedCount={basketItem}>
                    Добавить
                </Button>
            </div>
        </div>
    )
}

export default PizzaCard