import React, { FC } from 'react'
import styles from './Icon.module.scss'
import sprite from '@images/sprite.svg'

interface IconProps {
    name: string;
    onClick: () => void;
    disabled?: boolean
}

const Icon: FC<IconProps> = ({ name, onClick, disabled }) => {

    return (
        <button 
            className={name === '#remove' ? styles.close : styles.button}
            onClick={onClick}
            disabled={disabled}
        >
            <svg>
                <use xlinkHref={`${sprite}${name}`}/>
            </svg>
        </button>
    )
}

export default Icon