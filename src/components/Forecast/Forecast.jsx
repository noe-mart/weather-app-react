import { useContext } from 'react'
import { CityContext } from '../CityContext'
import { getDateString } from '../../helpers/getDayString'
import SunComponent from '../IconsSVG/SunComponent'
import MoonComponent from '../IconsSVG/MoonComponent'

import styles from './Forecast.module.css'
import Divider from '../Divider/Divider'

const Forecast = () => {
  const { globalCity } = useContext(CityContext)
  const { forecastday } = globalCity.forecast

  return forecastday.map((future) => (
    <>
      <p className={styles.text_center}>{getDateString(future.date)}</p>
      <div key={future.date} className={styles.d_grid}>
        <div className={styles.center}>
          <img src={future.day.condition.icon} alt="icon condition" />
          <p>{future.day.daily_chance_of_rain}%</p>
          <p className={styles.text_center}>
            <span>{future.day.condition.text}</span>
          </p>
        </div>
        <div className={styles.center}>
          <p className={styles.text_sm}>
            <span>min: {future.day.mintemp_c}º C</span>
          </p>
          <p className={styles.text_sm}>
            <span>máx: {future.day.maxtemp_c}º C</span>
          </p>
          <p className={styles.text_sm}>
            <SunComponent width={20} height={20} /> <span> {future.astro.sunrise}</span>
          </p>
          <p className={styles.text_sm}>
            <MoonComponent width={20} height={20} /> <span> {future.astro.sunset}</span>
          </p>
        </div>
      </div>
      <Divider width={20} color={'#66bc9a'}/>
    </>
  ))
}

export default Forecast
