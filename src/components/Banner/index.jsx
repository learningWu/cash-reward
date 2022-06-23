import React, { useContext, useRef, useEffect, useState } from 'react';
import styles from './style.module.scss';

const Banner = () => {

    const containerRef = useRef(null)

    const translateData = useRef(null)

    useEffect(() => {
        translateData.current = {
            currentTranslateY: 0,
            targetTranslateY: -10
        }
    }, [])

    return (
        <div className={styles.outContainer}>
            <div className={styles.container} ref={containerRef}>
                <div>
                    第三条
            </div>
                <div>
                    第二条
            </div>
                <div>
                    第一条
            </div>


            </div>
        </div>
    )
}
export default Banner