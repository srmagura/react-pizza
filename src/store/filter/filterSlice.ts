import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { FilterState, SortType } from './types'

const initialState: FilterState = {
    searchValue: '',
    categoryID: 0,
    currentPage: 1,
    sortNameObj: {
        name: 'популярности',
        sortProperty: 'rating',
        order: 'desc'
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryID: (state, action: PayloadAction<number>) => {
            state.categoryID = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setSortName: (state, action: PayloadAction<SortType>) => {
            state.sortNameObj = action.payload
        }
    }
})


export const { setSearchValue, setCategoryID, setCurrentPage, setSortName } = filterSlice.actions

export default filterSlice.reducer