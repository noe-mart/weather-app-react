import { useContext } from 'react'
import { CityContext } from '../../components/CityContext'
import Card from '../../components/Card/Card'
import Forecast from '../../components/Forecast/Forecast'
import Condition from '../../components/Condition/Condition'
import Divider from '../../components/Divider/Divider'
import styles from './Main.module.css'

export default function () {
  const { globalCity } = useContext(CityContext)
  const { name, region, country } = globalCity.location
  const { feelslike_c, humidity, temp_c, wind_kph, cloud } = globalCity.current
  const { icon, text } = globalCity.current.condition

  return (
    <main className={styles.d_center}>
      <Card>
        <div className={styles.location}>
          <h2>{name}</h2>
          <h4>
            {region}, {country}
          </h4>
        </div>
        <h1 className={temp_c > 20 ? styles.temp_calor : styles.temp_frio}>
          {temp_c}ºC
        </h1>
        <div className={styles.image_center}>
          <img src={icon} alt="contidion icon" />
          <p>{text}</p>
        </div>
      </Card>

      <Condition
        feelslike={feelslike_c}
        humidity={humidity}
        wind={wind_kph}
        cloud={cloud}
      />

      <Divider width={250} color={'#79accc'}/>

      <Forecast />
    </main>
  )
}
