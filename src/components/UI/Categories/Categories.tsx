import React, { FC } from 'react'
import styles from './Categories.module.scss'
import { categoriesNamesList } from '@utils/pizzaInfo'

interface CategoriesProps {
    handleChangeCategory: (index: number) => void
    value: number
}

const Categories: FC<CategoriesProps> = ({ handleChangeCategory, value }) => {

    const categories = categoriesNamesList.map((category, ind) => (
        <li 
            key={category} 
            onClick={() => handleChangeCategory(ind)} 
            className={value === ind ? styles.active : ''}
        >
            {category}
        </li>
    ))

    return (
        <div className={styles.categories}>
            <ul>
                {categories}
            </ul>
        </div>
    )
}

export default Categories