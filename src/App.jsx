import './App.css'
import { CityContext } from './components/CityContext'
import Welcome from './views/Welcome/Welcome'
import Search from './components/Search/Search'
import Main from './views/Main/Main'
import { useState } from 'react'

function App() {
  const [globalCity, setGlobalCity] = useState(null) 

  return (
    <CityContext.Provider value={{globalCity, setGlobalCity}}>
      <div className="app">
      <div className="container">
        <Search />
        {
          globalCity 
          ? <Main/>
          : <Welcome />
        }
      </div>
      </div>
    </CityContext.Provider>
  )
}

export default App
