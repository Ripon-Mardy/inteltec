import React from 'react'
import Image from 'next/image'

// logos ==== 
import logo1 from '../public/image/partners/logo1.webp'
import logo2 from '../public/image/partners/logo2.webp'
import logo3 from '../public/image/partners/logo3.webp'
import logo4 from '../public/image/partners/logo4.webp'
import logo5 from '../public/image/partners/logo5.webp'
import logo6 from '../public/image/partners/logo6.webp'
import logo7 from '../public/image/partners/logo7.webp'
import logo8 from '../public/image/partners/logo8.webp'
import logo9 from '../public/image/partners/logo9.webp'
import logo10 from '../public/image/partners/logo10.webp'

const Partners = () => {
    return (
        <>

            <section className='py-14'>
                <div className='container mx-auto'>
                    <h1 className='text-4xl text-gray-500 font-semibold'>Partners</h1>
                    <div className='grid grid-cols-3 md:grid-cols-5 md:gap-14 gap-10  mt-10'>
                        <Image src={logo1} alt='partners' width={60} height={20} className='md:w-24' />
                        <Image src={logo2} alt='partners' width={60} height={20} className='md:w-24 ' />
                        <Image src={logo3} alt='partners' width={60} height={20} className='md:w-24 ' />
                        <Image src={logo4} alt='partners' width={60} height={20} className='md:w-24 ' />
                        <Image src={logo5} alt='partners' width={60} height={20} className='md:w-24 ' />
                        <Image src={logo6} alt='partners' width={60} height={20} className='md:w-24' />
                        <Image src={logo7} alt='partners' width={60} height={20} className='md:w-24' />
                        <Image src={logo8} alt='partners' width={60} height={20} className='md:w-24 ' />
                        <Image src={logo9} alt='partners' width={60} height={20} className='md:w-24 ' />
                        <Image src={logo10} alt='partners' width={0} height={20} className='md:w-24' />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Partners
