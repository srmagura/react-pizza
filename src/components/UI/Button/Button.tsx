import React, { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonNames {
    [key: string]: string
}

const buttonNames: ButtonNames = {
    'Добавить': styles.button__add,
    'Вернуться назад': styles.button__return
}

interface ButtonProps {
    children: string | undefined;
    onClick?: () => void;
    addedCount?: number
}

const Button: FC<ButtonProps> = ({ children, onClick, addedCount }) => {

    const buttonStyle = children && buttonNames[children] 
    const numberOfSpecificPizzas = (addedCount ? addedCount : 0) > 0 && <i>{addedCount}</i>
    
    return (
        <button
            className={buttonStyle || styles.button}
            onClick={onClick}
        >
            <span>{children}</span>
            {numberOfSpecificPizzas}
        </button>
    )
}

export default Button
