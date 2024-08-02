import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'


// image ==== 
import inteltec from '../../public/image/inteltec.png'

const page = () => {
  return (
    <>
      <div className='bg-gray-800 fixed w-full top-0'>
        <Navbar />
      </div>


      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='container mx-auto md:basis-1/2 bg-topHeaderColor text-white pt-28 md:pt-40 h-screen md:pl-24'>
          <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>About Us</h1>
          <p className='mt-5 leading-7 font-thin'>Inteltec is a leading GCC company in engineering and implementation of information and communication technology (ICT) Networks and systems. Since its inception in 1995 in Riyadh, Inteltec gathered a wide expertise and in-depth technical expertise that is allowing the company to provide its customers with professional turn key services and solutions in various ICT domains.
            Inteltec customers were able to find solutions not only for their immediate needs but also to realize their strategic ideas and plans in building network infrastructure or developing their ongoing business processes from whatever sector they belong to (oil, banks, public sector). Customers find Inteltec their perfect partner who is able to analyze all problems and propose the fit solutions technically and economically.
            Thanks to its organizational setup and flexibility, Inteltec is always ready to act timely and efficiently supporting its operations with more than 700 employees and logistical facilities spread over the GCC territories.</p>
        </div>
        <div className='basis-1/2'>
          <Image src={inteltec} className='w-full md:h-screen' />
        </div>
      </div>




    </>
  )
}

export default page