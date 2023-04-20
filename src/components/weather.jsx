import React from 'react'
import Image from 'next/image'

export function Weather({data}) {
  console.log(data);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-ful h-[90vh] m-auto p-4 text-white'>
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image alt='img' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width='100' height='100' className=''/>
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-8xl'>{data.main.temp.toFixed(0)}&#176;</p>

      </div>

      <div className='relative p-8 rounded-md bg-black/50'>
        <p className='pb-6 text-2xl text-center'>Weather in {data.name}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='text-2xl font-bold'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className='text-xl'>Feels like</p>
          </div>
          <div>
            <p className='text-2xl font-bold'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidty</p>
          </div>
          <div>
            <p className='text-2xl font-bold'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
          </div>
        </div>
      </div>

    </div>
  )
}
