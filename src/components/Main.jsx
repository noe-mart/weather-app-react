import { useContext } from 'react'
import { CityContext } from './CityContext'
import '../css/main.css'

export default function () {
  const { globalCity } = useContext(CityContext)
  const { name, region, country } = globalCity.location
  const { feelslike_c, humidity, temp_c, wind_kph, wind_dir } =
    globalCity.current
  const { icon, text } = globalCity.current.condition
    const {forecastday} = globalCity.forecast

  return (
    <main>
      <h1 className={temp_c > 20 ? "temp-calor": "temp-frio"}>{temp_c}ºC</h1>
      <h2>{name}</h2>
      <h4>
        {region}, {country}
      </h4>
      <div className="card">
        <div className="card-header">
          <img src={icon} alt="contidion icon" />
          <p>{text}</p>
        </div>
        <div className="card-body">
          <ul>
            <li>humedad: {humidity} %</li>
            <li>Sensación: {feelslike_c} ºC</li>
            <li>
              Viento: {wind_kph} kph {wind_dir}
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
          <div className="card-header">
              <p>Pronóstico de los próximos días</p>
          </div>
          <div className="card-body">
              <div className="horizontal-scroll">
                  {
                      forecastday.map(future => (
                          <div key={future.date} className="card-future">
                              <img src={future.day.condition.icon} alt="icon condition" />
                              <p>{future.day.daily_chance_of_rain}%</p>
                              <p><span>{future.day.condition.text}</span></p>
                              <p className='text-sm'><span>min: {future.day.mintemp_c}º C</span></p>
                              <p className='text-sm'><span>máx: {future.day.maxtemp_c}º C</span></p>
                              <p className='text-sm'><span>☀️ {future.astro.sunrise}</span></p>
                              <p className='text-sm'><span>🌙 {future.astro.sunrise}</span></p>
                              
                              
                              
                          </div>
                      ))
                  }
              </div>
          </div>
      </div>
    </main>
  )
}
