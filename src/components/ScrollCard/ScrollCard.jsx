import styles from './ScrollCard.module.css'

const ScrollCard = ({children}) => (
    <div className={styles.scroll}>
        {children}
    </div>
)

export default ScrollCard