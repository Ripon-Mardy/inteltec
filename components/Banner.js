import React from 'react'

const Banner = () => {
  return (
    <>
                   <div className='container mx-auto'>
                     {/* ==== banner content ====  */}
                     <div className='mt-16 md:mt-20'>
                    <h1 className='text-4xl md:text-7xl text-white font-semibold'>Telco Networks...</h1>
                    <h1 className='text-4xl md:text-7xl text-white font-semibold'>Redefined</h1>
                    <div className='mt-10 flex gap-5'>
                        <button className='border p-2 px-5 text-sm md:text-lg font-light rounded-sm text-white uppercase hover:bg-buttonBgColor duration-200 ease-in-out'>learn more</button>
                        <button className=' p-2 px-5 text-sm md:text-lg font-light rounded-sm bg-buttonBgColor  text-white uppercase hover:bg-white hover:text-black duration-200 ease-in-out'>services</button>
                    </div>
                </div>
                   </div>
    </>
  )
}

export default Banner
