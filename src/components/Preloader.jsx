import React from 'react'
import loader from "../assets/loading.gif"

const Preloader = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-[#fbfbfb]'>
      <img src={loader} alt="loader" />
    </div>
  )
}

export default Preloader
