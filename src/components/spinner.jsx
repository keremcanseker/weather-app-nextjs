import React from 'react'
import spinner from "../../public/spinner.gif"
import Image from 'next/image'

export default function Spinner() {
  return (
    <div>
<Image alt="loading.." src={spinner} className='w-[200px] m-auto'/>
    </div>
    

  )
}
