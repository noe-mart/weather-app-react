import WindComponent from '../IconsSVG/WindComponent'
import CloudComponent from '../IconsSVG/CloudComponent'
import WaterComponent from '../IconsSVG/WaterComponent'
import ThermometerComponent from '../IconsSVG/ThermometerComponent'
import styles from './Condition.module.css'


const Condition = ({feelslike, humidity, wind, cloud}) => {
  return (
    <div className={styles.d_grid}>
      <div className={styles.condition_card}>
        <h5>Viento</h5>
        <div>
          <WindComponent width={60} height={60} />
        </div>
        <span>{wind} km/h</span>
      </div>
      <div className={styles.condition_card}>
        <h5>Humedad</h5>
        <div>
          <WaterComponent width={60} height={60} />
        </div>
        <span>{humidity}%</span>
      </div>
      <div className={styles.condition_card}>
        <h5>Nubes</h5>
        <div>
          <CloudComponent width={60} height={60} />
        </div>
        <span>{cloud}%</span>
      </div>
      <div className={styles.condition_card}>
        <h5>Sensación</h5>
        <div>
          <ThermometerComponent width={60} height={60} />
        </div>
        <span>{feelslike}ºC</span>
      </div>
    </div>
  )
}

export default Condition
