import './App.css'
import { CityContext } from './components/CityContext'
import Default from './components/Default'
import Search from './components/Search'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [globalCity, setGlobalCity] = useState(null) 
  return (
    <CityContext.Provider value={{globalCity, setGlobalCity}}>
      <div className="container">
        <h1>Aplicación del tiempo</h1>
        <Search />
        {
          globalCity 
          ? <Main/>
          : <Default />
        }
      </div>
    </CityContext.Provider>
  )
}

export default App
