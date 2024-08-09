import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'


import ibs from '../../public/image/ibs.webp'


const page = () => {
    return (
        <>
            <div className='bg-gray-800 fixed w-full top-0 z-30'>
                <Navbar />
            </div>


            <section className='bg-topHeaderColor'>
            <div className='flex flex-col md:flex-row gap-10 container mx-auto'>
                <div className=' md:basis-1/2 text-white pt-28 md:pt-40 h-auto py-10'>
                    <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>IBS Services</h1>
                    <p className='mt-5 leading-7 font-thin'>
                        IBS Service

                        Inteltec provides a full FTK service for Indoor Building Solution, starting form planning and site acquisition going through materials procurement and site implementation including all the Telecom and Civil work required, up to RF testing and optimization
                        However we are also open to provide a partial IBS services such as: <br />

                        1- RF Planning and IBS Design for both active and Passive DAS <br />
                        2- Supply of IBS materials (Antennas, Cables, Connectors, Active Equipments, Etc.. ) 3- Professional IBS DAS Implementation <br />
                        4- BTS / Transmission system installation commissioning and integration <br />
                        5- RF optimization and coverage verification. <br />
                    </p>

                </div>
                <div className='basis-1/2 h-auto'>
                    <Image width={100} height={100} layout='responsive' className=' object-cover w-full' src={ibs} />
                </div>
            </div>
            </section>




        </>
    )
}

export default page