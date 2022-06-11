const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
  },
}

const searchCity = (city) => {
  return fetch(
    `https://weatherapi-com.p.rapidapi.com/search.json?q=${city}&lang=es`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err))
}

const getCity = (lat, lon) => {
  return fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat},${lon}&days=5&lang=es`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
}
export { getCity, searchCity }
