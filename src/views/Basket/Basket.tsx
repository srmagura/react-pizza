import React, { FC } from 'react'
import styles from './Basket.module.scss'
import bigcart from '@images/bigcart.png'
import BasketPizza from '@components/Pizza/BasketPizza/BasketPizza'
import Button from '@components/UI/Button/Button'
import { Link } from 'react-router-dom'
import EmptyResult from '@components/UI/EmptyResult/EmptyResult'
import sprite from '@images/sprite.svg'
import { useAppDispatch, useAppSelector } from 'store/store'
import { finalPrice } from '@utils/priceFormat'
import { removeAllPizzasFromBasket } from 'store/basket/basketSlice'

const Basket: FC = () => {

    const { basketPizzas, totalPrice } = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch()

    const basketPizzasList = basketPizzas.map(item => (
        <BasketPizza key={item.id + item.type + item.size} item={item}/>
    ))
    const price = finalPrice(totalPrice)
    const totalNumber = basketPizzas.reduce((acc, obj) => acc + obj.count, 0)

    const handleRemoveAll = () => {
        dispatch(removeAllPizzasFromBasket())
    }

    const renderedBasketPizzas = basketPizzas.length > 0
        ?
            <div className={styles.basket__container}>
                <div className={styles.basket__container__content}>
                    <div className={styles.header}>
                        <div className={styles.header__left}>
                            <img src={bigcart} alt="bigcart" />
                            <h3>Корзина</h3>
                        </div>
                        <div className={styles.header__right} onClick={handleRemoveAll}>
                            <svg>
                                <use xlinkHref={`${sprite}#trash`}/>
                            </svg>
                            <span>Очистить корзину</span>
                        </div>
                    </div>
                    {basketPizzasList}
                    <div className={styles.basket__footer}>
                        <div className={styles.top}>
                            <div className={styles.top__left}>
                                <span>Всего пицц:</span>
                                <span>{totalNumber} шт.</span>
                            </div>
                            <div className={styles.top__right}>
                                <span>Сумма заказа:</span>
                                <span>{price}</span>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <Link to="/">
                                <Button>Вернуться назад</Button>
                            </Link>
                            <Button>Оплатить сейчас</Button>
                        </div>
                    </div>
                </div>
            </div>
        :
            <EmptyResult
                title="Корзина пустая"
            />

    return (
        <>
            {renderedBasketPizzas}
        </>
    )
}

export default Basket