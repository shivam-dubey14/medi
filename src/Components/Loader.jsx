import React from 'react'

function Loader() {
  return (
    <div className='h-screen bg-gradient-to-br from-slate-50 to-green-300 flex items-center justify-center  '><img  className="motion-preset-compress motion-duration-2000" src="https://medevidences.com/_next/image?url=%2Flogo.png&w=1920&q=75" alt="loader-image" /></div>
  )
}

export default Loader