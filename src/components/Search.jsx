import { useEffect, useState } from 'react'
import { searchCity } from '../../services/api'
import '../App.css'
import List from './List'

function Search() {
  const [city, setCity] = useState('')
  const [time, setTime] = useState(null)
  const [cities, setCities] = useState([])

  useEffect(() => {
    clearTimeout(time)
    setTime(
      setTimeout(() => {
        if (city.length >= 3) {
          searchCity(city).then((res) => {
            setCities(res)
          })
        }
      }, 500)
    )
  }, [city])

  const handlerChange = (e) => {
    setCity(e.target.value)
  }

  const clearInput = () => {
    setCity('')
    setCities([])
  }

  return (
    <header id="search">
        <input
          className="search_input"
          name="city"
          type="text"
          value={city}
          onChange={handlerChange}
          placeholder="Buscar"
        />
      {cities.length > 0 ? <List cities={cities} clearInput={clearInput} /> :''}
    </header>
  )
}

export default Search
