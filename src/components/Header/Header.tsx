import React, { FC } from 'react'
import styles from './Header.module.scss'
import cart from '@images/cart.png'
import logo from '@images/logo.png'
import Search from '@components/UI/Search/Search'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from 'store/store'
import { finalPrice } from '@utils/priceFormat'

const Header: FC = () => {

    const { error } = useAppSelector(state => state.pizzas)
    const { basketPizzas, totalPrice } = useAppSelector(state => state.basket)
    const location = useLocation()
    const totalNumber = basketPizzas.reduce((acc, obj) => acc + obj.count, 0)
    const fullPrice = finalPrice(totalPrice)
    const showInfo = (location.pathname === '/' && !error) &&
        <>
            <Search/>
            <Link to='basket'>
                <div className={styles.basket}>
                    <span>{fullPrice}</span>
                    <div className={styles.basket__line}></div>
                    <div className={styles.basket__count}>
                        <img src={cart} alt="cart" />
                        <span>{totalNumber}</span>
                    </div>
                </div>
            </Link>
        </>
    
    return (
        <div className={styles.header}>
            <Link to="/">
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                    <div className={styles.logo__sign}>
                        <h3>REACT PIZZA</h3>
                        <span>самая вкусная пицца во вселенной</span>
                    </div>
                </div>
            </Link>
            {showInfo}
        </div>
    )
}

export default Header