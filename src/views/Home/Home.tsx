import Categories from '@components/UI/Categories/Categories'
import EmptyResult from '@components/UI/EmptyResult/EmptyResult'
import Pagination from '@components/UI/Pagination/Pagination'
import PizzaCard from '@components/Pizza/PizzaCard/PizzaCard'
import PizzaSkeleton from '@components/Pizza/PizzaSkeleton/PizzaSkeleton'
import Sort from '@components/UI/Sort/Sort'
import React, { FC, useEffect } from 'react'
import { setCategoryID, setCurrentPage } from 'store/filter/filterSlice'
import { fetchPizzas } from 'store/pizzas/pizzaAsyncThunk'
import { useAppDispatch, useAppSelector } from 'store/store'
import styles from './Home.module.scss'

const Home: FC = () => {

    const { pizzas, loading, error } = useAppSelector(state => state.pizzas)
    const { categoryID, searchValue, currentPage, sortNameObj } = useAppSelector(state => state.filter)
    const dispatch = useAppDispatch()

    const handleChangeCategory = (index: number) => {
        dispatch(setCategoryID(index))
        //dispatch(setCurrentPage(1))
    }

    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    const pizzaList = pizzas?.map(item => (
        <PizzaCard key={item.id} item={item}/>
    ))

    const skeletons = [...new Array(4)].map((_, index) => <PizzaSkeleton key={index}/>)

    //const loadedPizzas = loading === 'on' ? skeletons : pizzaList
    const loadedPizzas = skeletons 

    const getPizzas = async () => {
        const category = categoryID > 0 ? String(categoryID) : ''
        const search = searchValue
        const sortBy = sortNameObj.sortProperty
        const order = sortNameObj.order
        const page = String(currentPage)

        dispatch(
            fetchPizzas({ category, search, sortBy, order, page })
        )
    }
        
    useEffect(() => {
        getPizzas()
    }, [categoryID, searchValue, sortNameObj, currentPage])

    if (error) {
        return <EmptyResult title="Произошла ошибка"/>
    }

    // if (!pizzas?.length) {
    //     return <EmptyResult title="Таких пицц у нас нет"/>
    // }
    
    return (
        <div className={styles.home__container}> 
            <div className={styles.content__header}>
                <Categories handleChangeCategory={handleChangeCategory} value={categoryID}/>
                <Sort sortNameObj={sortNameObj}/>
            </div>      
            <h2>Все пиццы</h2>
            <div className={styles.content__list}>
                {loadedPizzas}
            </div>
            <Pagination 
                handleChangePage={handleChangePage} 
                currentPage={currentPage}
            />
        </div>
        
    )
}

export default Home