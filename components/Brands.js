import React from 'react'
import Image from 'next/image'


// === images === 
import logo1 from '../public/image/brands/Inteltec Emirates Group S.webp'
import logo2 from '../public/image/brands/iPay.webp'
import logo3 from '../public/image/brands/Vodatel.webp'
import logo4 from '../public/image/brands/ftc.webp'
import logo5 from '../public/image/brands/thumbnail_image001.webp'
import logo6 from '../public/image/brands/Inteltec Emirates New.webp'
import logo7 from '../public/image/brands/GULFTEC.webp'

const Brands = () => {
    return (
        <>
            <section className='mt-48  py-20 bg-white'>



               <div className='container mx-auto'>
               <div className='flex flex-col gap-5 md:flex-row md:w-10/12 md:mx-auto md:justify-start md:items-center'>
                    <h1 className='font-serif text-xl text-center'>Subsidiary of</h1>
                    <Image src={logo1} width={200} height={200} className='mx-auto' />
                    <div className='grid grid-cols-3 gap-5 md:gap-10'>
                        <Image src={logo2} width={70} height={50} className='md:w-20' />
                        <Image src={logo3} width={70} height={50} className='md:w-20' />
                        <Image src={logo4} width={70} height={50} className='md:w-20' />
                        <Image src={logo5} width={70} height={50} className='md:w-20' />
                        <Image src={logo6} width={70} height={50} className='md:w-20' />
                        <Image src={logo7} width={80} height={50} className='md:w-20' />
                    </div>

                </div>
               </div>


            </section>



            <section className='about_inteltec py-10'>
                <div className='container mx-auto'>

                    <h1 className='text-4xl mb-5 text-white font-semibold'>About Inteltec </h1>
                    <div className='md:w-1/2'>
                    <p className='text-white text-sm -tracking-tighter leading-6  md:text-lg'>Inteltec is a GCC leading company in engineering and realization of Telecom Networks and Systems. From its inception in 1995 Inteltec gathered a wide experience and in depth technical expertise that is allowing the company to provide our customers with professional turn key services and solutions in various segments of telecommunication.</p>
                    <p className='text-white text-sm -tracking-tighter leading-6  mt-2 md:text-lg'>Partnering with Inteltec, our clients have been able to find not only their immediate needs but also were able to execute their strategic ideas or plans in building assets network infrastructure (operators) or develop their on going business processes from whatever sector they belong to (oil, banks, public authorities etc.).</p>
                    </div>
                    <button className='border p-2 px-5 text-sm font-light rounded-sm text-white uppercase hover:bg-buttonBgColor duration-200 ease-in-out mt-5'>About us</button>
                </div>

            </section>




        </>
    )
}

export default Brands
