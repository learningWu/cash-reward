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

        setTimeout(() => {
            console.log(translateData.current)
            const animation = containerRef.current.animate(
                // keyframe
                // { transform: `translateY(${translateData.current.currentTranslateY}px)` },
                { transform: `translateY(${translateData.current.targetTranslateY}px)` },
                {
                    // timing options
                    duration: 1000,
                    iterations: 1,
                })
            animation.onfinish = () => {
                console.log("xx", translateData.current)
                translateData.current = {
                    currentTranslateY: translateData.current.targetTranslateY,
                    targetTranslateY: translateData.current.targetTranslateY - 10
                }
            }
        }, 2000)
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