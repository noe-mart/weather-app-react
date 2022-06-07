import { useContext } from 'react'
import { CityContext } from './CityContext'
import styles from '../css/Main.module.css'

export default function () {
  const { globalCity } = useContext(CityContext)
  const { name, region, country } = globalCity.location
  const { feelslike_c, humidity, temp_c, wind_kph, wind_dir } =
    globalCity.current
  const { icon, text } = globalCity.current.condition
    const {forecastday} = globalCity.forecast

  return (
    <main>
      <h1 className={temp_c > 20 ? styles.temp_calor: styles.temp_frio}>{temp_c}ºC</h1>
      <h2>{name}</h2>
      <h4>
        {region}, {country}
      </h4>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <img src={icon} alt="contidion icon" />
          <p>{text}</p>
        </div>
        <div className={styles.card_body}>
          <ul>
            <li>humedad: {humidity} %</li>
            <li>Sensación: {feelslike_c} ºC</li>
            <li>
              Viento: {wind_kph} kph {wind_dir}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
          <div className={styles.card_header}>
              <p>Pronóstico de los próximos días</p>
          </div>
          <div className={styles.card_body}>
              <div className={styles.horizontal_scroll}>
                  {
                      forecastday.map(future => (
                          <div key={future.date} className={styles.card_future}>
                              <img src={future.day.condition.icon} alt="icon condition" />
                              <p>{future.day.daily_chance_of_rain}%</p>
                              <p><span>{future.day.condition.text}</span></p>
                              <p className={styles.text_sm}><span>min: {future.day.mintemp_c}º C</span></p>
                              <p className={styles.text_sm}><span>máx: {future.day.maxtemp_c}º C</span></p>
                              <p className={styles.text_sm}><span>☀️ {future.astro.sunrise}</span></p>
                              <p className={styles.text_sm}><span>🌙 {future.astro.sunrise}</span></p>
                              
                              
                              
                          </div>
                      ))
                  }
              </div>
          </div>
      </div>
    </main>
  )
}
