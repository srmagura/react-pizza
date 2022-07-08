import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import styles from './Search.module.scss'
import sprite from '@images/sprite.svg'
import { useAppDispatch, useAppSelector } from 'store/store'
import { setSearchValue } from 'store/filter/filterSlice'
import debounce from 'lodash.debounce'

const Search: FC = () => {

    //const { searchValue } = useAppSelector(state => state.filter)
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()

    const debouncedSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str))
        }, 300),
        []
    )
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        debouncedSearchValue(e.target.value)
    }

    const handleInputClear = () => {
        dispatch(setSearchValue(''))
        setValue('')
    }

    const showCleanImage = value &&
        <svg className={styles.clean__img} onClick={handleInputClear}>
            <use xlinkHref={`${sprite}#clean`}/>
        </svg>

    return (
        <div className={styles.search}>
            <svg className={styles.search__img}>
                <use xlinkHref={`${sprite}#search`}/>
            </svg>
            <input 
                type="text" 
                placeholder="Поиск пиццы..."
                value={value}
                onChange={handleInputChange}
                autoFocus
            />
            {showCleanImage}
        </div>
    )
}

export default Search