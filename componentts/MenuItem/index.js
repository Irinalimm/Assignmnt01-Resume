import styles from './MenuItem.module.css'
import { useState } from "react"


export default function MenuItem({
    title = "Title",
    backgroundColor,
    textColor,
    tabLeft
}) {
    return (
        <>
            <div className={styles.menuContainer} style={({ backgroundColor: backgroundColor, textColor: textColor })}>
                {title}
            </div>
        </>
    )
}
