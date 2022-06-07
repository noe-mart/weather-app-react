import { useEffect, useState } from 'react'
import { searchCity } from '../../services/api'
import List from './List'
import styles from '../css/Search.module.css'

function Search() {
  const [city, setCity] = useState('')
  const [time, setTime] = useState(null)
  const [cities, setCities] = useState([])
  const [focus, setFocus] = useState(false)

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

  const handlerBlur = () => {
    setTimeout(() => {
      setFocus(false)
    }, 100);
  }

  return (
    <header id="search">
        <input
          className={styles.search_input}
          name="city"
          type="text"
          value={city}
          onChange={handlerChange}
          placeholder="Buscar"
          onFocus={() => setFocus(true)}
          onBlur={handlerBlur}
        />
      {cities.length > 0 && focus ? <List cities={cities} clearInput={clearInput} /> :''}
    </header>
  )
}

export default Search
