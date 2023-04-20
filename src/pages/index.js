// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import axios from "axios"
import { useState } from "react"
import { BsSearch } from 'react-icons'


export default function Home() {

  const [city, setcity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const fetchWeater = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data)
      console.log(response.data);

    })
    setcity('');
    setLoading(false);
  }

  return (
    <main className="">
      <h1>hello world</h1>
      <button onClick={fetchWeater}>click me</button>

    </main>
  )
}
