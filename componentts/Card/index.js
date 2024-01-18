import styles from "./Card.module.css"


export default function Form({
    title = "Title",
    borderColor,
    description = "Description",
    backgroundColor
}) {
    return (
        <>
            <div style={({ borderColor: borderColor, backgroundColor: backgroundColor })} className={styles.cardBody} >
                {title}
                <div className={styles.description}>{description}</div>

            </div>

        </>
    )
}