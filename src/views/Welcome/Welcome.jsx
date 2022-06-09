import styles from './Welcome.module.css'

export default function () {
  return (
    <main className={styles.center}>
      <h2 className={styles.h2}>Hola 👋, aún no has buscado un lugar. 🗺️</h2>
      <h3 className={styles.h3}>Puedes buscarlo ahí arriba ☝️</h3>
    </main>
  )
}