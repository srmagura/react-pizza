import React, { FC } from 'react'
import styles from './EmptyResult.module.scss'
import smile from '@images/smile.jpg'
import { Link } from 'react-router-dom'
import Button from '@components/UI/Button/Button'
import { emptyInfo } from '@utils/emptyInfo'

interface EmptyResultProps {
    title: string;
}

const EmptyResult: FC<EmptyResultProps> = ({ title }) => {

    const spanTop = emptyInfo[title].spanTop
    const spanBottom = emptyInfo[title].spanBottom

    const image = emptyInfo[title].img 
        ?
            <div className={styles.picture}>
                <img src={emptyInfo[title].img} alt={emptyInfo[title].img}/>
            </div>
        :   
            null
        
    const buttonName = emptyInfo[title].buttonName

    const handleReload = () => {
        window.location.reload()
    }

    const button = title === 'Произошла ошибка'
        ? 
            <Button onClick={handleReload}>{buttonName}</Button>
        :
            title === 'Таких пицц у нас нет'
        ?   
            null
        :
            <Link to="/">
                <Button>{buttonName}</Button>
            </Link>

    return (
        <div className={styles.empty__container}>
            <div className={styles.empty__content}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                    <img src={smile} alt="smile" />
                </div>
                <div className={styles.subtitle}>
                    <span>{spanTop}</span>
                    <span>{spanBottom}</span>
                </div>
                {image}
                {button}
            </div>
        </div>
    )
}

export default EmptyResult