import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import axios from "axios"
import { useState } from "react"
import { BsSearch } from 'react-icons/bs'


export default function Home() {

  const [city, setcity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

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

      {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0  bg-black/15 z-[1]'></div>

      {/* background image */}
      <Image src="https://images.unsplash.com/photo-1505533542167-8c89838bb19e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" layout='fill'
        className='object-cover'
        alt='ha' />

      {/* search */}
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form className='flex items-center justify-between w-full p-3 m-auto text-white bg-transparent border border-slate-500 rounded-2xl'>
          <div>
            <input type='text' className='text-xl text-white bg-transparent border-none focus:outline-none' placeholder='Search City'></input>
          </div>
          <button onClick={fetchWeater} className='text-slate-500'><BsSearch size={20} /></button>
        </form>
      </div>

    </main>
  )
}
