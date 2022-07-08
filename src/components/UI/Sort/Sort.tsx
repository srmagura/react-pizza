import React, { FC, useRef, useState, useEffect, MouseEvent } from 'react'
import styles from './Sort.module.scss'
import arrow from '@images/arrow.png'
import { sortNamesList } from '@utils/pizzaInfo'
import { useAppDispatch } from 'store/store'
import { setSortName } from 'store/filter/filterSlice'
import { SortType } from 'store/filter/types'
import sprite from '@images/sprite.svg'

interface SortProps {
    sortNameObj: SortType
}

const Sort: FC<SortProps> = ({ sortNameObj }) => {
    const [opened, setOpened] = useState(false)
    const dispatch = useAppDispatch()
    const sortRef = useRef<HTMLDivElement>(null)

    const handleOpened = () => {
        setOpened(!opened)
    }

    const handleSelectSortName = (obj: SortType) => {
        dispatch(setSortName(obj))
        setOpened(false)
    }

    const sortNames = sortNamesList.map(sortName => (
        <li 
            key={sortName.name} 
            className={sortNameObj.name === sortName.name ? styles.active : ''}
        >
            <div className={styles.buttons}>
                <div className={styles.picture} onClick={() => handleSelectSortName({...sortName, order: 'desc'})}>
                    <svg>
                        <use xlinkHref={`${sprite}#arrow-up`}/>
                    </svg>
                </div>
                <div className={styles.picture} onClick={() => handleSelectSortName({...sortName, order: 'asc'})}>
                    <svg>
                        <use xlinkHref={`${sprite}#arrow-up`}/>
                    </svg>
                </div>
            </div>
            <p>{sortName.name}</p>
        </li>
    ))

    const modal = opened && 
        <div className={styles.sort__popup}>
            <ul>
                {sortNames}
            </ul>
        </div>

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setOpened(false)
            }
        }

        document.body.addEventListener('click', handleClickOutside)

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div className={styles.sort} ref={sortRef}>
            <div className={styles.sort__label}>
                <img src={arrow} alt="arrow" style={{transform: !opened ? 'rotate(0deg)' : ''}}/>
                <p>Сортировка по:</p>
                <span onClick={handleOpened}>{sortNameObj.name}</span>
            </div>
            {modal}
        </div>
    )
}

export default Sort