import Navbar from '@/components/Navbar'
import React from 'react'


const page = () => {
    return (
        <>
            <div className='bg-gray-800 fixed w-full top-0 z-30'>
                <Navbar />
            </div>


           <section className='bg-topHeaderColor'>
           <div className='flex flex-col md:flex-row gap-10 container mx-auto h-screen'>
                <div className=' md:basis-1/2 text-white pt-28 md:pt-40 h-auto py-10'>
                    <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>
                    RF Planning</h1>
                    <p className='mt-5 leading-7 font-thin'>
                    IntUtilizing the top advanced simulators and planning tools used by highly experienced engineering teams, Inteltec is capable to design the different radio access technologies GSM, UMTS, WiFi, WiMAX and LTE for the various environments such like metropolitan, rural and indoor.
                    On the other hand network audit and benchmarking is one of our specialization since we have the dedicated engineers and teams to conduct the needed drive tests and data analysis
                    </p>
                </div>
                <div className='basis-1/2 h-auto'>
                    <video autoPlay muted loop className='h-full object-cover' src="https://video.wixstatic.com/video/f21e62_8dfdf058469f450e9c8b83f2adf3b050/1080p/mp4/file.mp4"></video>
                </div>
            </div>
           </section>




        </>
    )
}

export default page