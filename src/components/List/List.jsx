import { useContext } from 'react'
import { getCity } from '../../../services/api'
import { CityContext } from '../CityContext'
import styles from './List.module.css'
const List = ({ cities, clearInput }) => {

  const {setGlobalCity} = useContext(CityContext)

    const handlerClick = ({lat, lon}) => {
        getCity(lat, lon).then(res => setGlobalCity(res))
        clearInput()
    }

  return (
    <ul className={styles.list}>
      {cities.map((city) => (
        <li
          key={city.id}
          onClick={() => { handlerClick(city) }}
        >
          {city.name}, {city.region}, {city.country} 
        </li>
      ))}
    </ul>
  )
}

export default List
