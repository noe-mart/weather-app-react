import { useContext } from 'react'
import { getCity } from '../../services/api'
import '../App.css'
import { CityContext } from './CityContext'

const List = ({ cities, clearInput }) => {

  const {setGlobalCity} = useContext(CityContext)

    const handlerClick = ({lat, lon}) => {
        getCity(lat, lon).then(res => setGlobalCity(res))
        clearInput()
    }

  return (
    <ul className="list">
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
