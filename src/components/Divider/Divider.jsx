import styles from './Divider.module.css'

export default function Divider({width, color}) {
  return (
    <div className={styles.d_center}>
      <hr className={styles.divider} 
      style={{ width: width+ 'px', backgroundColor: color }} />
    </div>
  )
}
