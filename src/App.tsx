import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import ContentLayout from '@components/layout/ContentLayout/ContentLayout'
import Home from '@views/Home/Home'
import Basket from '@views/Basket/Basket'
import EmptyResult from '@components/UI/EmptyResult/EmptyResult'


const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ContentLayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="*" element={<EmptyResult title="Ничего не найдено"/>}/>
            </Route>
        </Routes>
    )
}

export default App