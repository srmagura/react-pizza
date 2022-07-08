import React from 'react'
import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './PizzaSkeleton.module.scss'

const PizzaSkeleton: FC = () => {
    return (
        <div className={styles.skeleton}> 
            <Skeleton circle width={300} height={100}/>
        </div>
        // <SkeletonTheme baseColor="#000" highlightColor="#444">
        //     <div className={styles.skeleton}>
        //         <Skeleton circle width={100} style={{width: '100%', height: '100%', marginBottom: '11px'}}/>
        //         <Skeleton height={25} width="100%" style={{marginBottom: '22px', borderRadius: '10px'}}/>
        //         <Skeleton height={80} width="100%" style={{marginBottom: '17px', borderRadius: '10px'}}/>
        //         <div className={styles.skeleton__bottom}>
        //             <Skeleton height={27} width="100%" style={{borderRadius: '10px'}}/>
        //             <Skeleton height={27} width="100%" style={{borderRadius: '10px'}}/>
        //         </div>
        //     </div>
        // </SkeletonTheme>
    )
}

export default PizzaSkeleton