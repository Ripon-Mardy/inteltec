import Navbar from '@/components/Navbar'
import React from 'react'


const page = () => {
    return (
        <>
            <div className='bg-gray-800 fixed w-full top-0 z-30'>
                <Navbar />
            </div>


            <div className='flex flex-col md:flex-row h-screen'>
                <div className='container mx-auto md:basis-1/2 bg-topHeaderColor text-white pt-28 md:pt-40 h-auto py-10 md:pl-24'>
                    <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>Enterprise
                        Solutions</h1>
                    <p className='mt-5 leading-7 font-thin'>
                        Our experience in engineering and installation of network structures has allowed us great new opportunities.
                        We are able to package our regular services with added value applications, namely: <br />
                        1- Video surveillance systems <br />
                        2- Systems for monitoring and managing airport operations and road networks <br />
                        3- Emergency systems <br />
                        4- Safety systems <br />
                        5- Alerting and conferencing solutions <br />
                        6- Enterprise UPS Systems <br />

                        What’s more, implementation of building management systems is a sector where Inteltec has recently joined efforts with international providers. Together, they have quite remarkable experience to execute in the area.
                    </p>

                </div>
                <div className='basis-1/2 h-auto'>
                    <video autoPlay muted loop className='h-full object-cover' src="https://video.wixstatic.com/video/f21e62_6757ebe9836e41c18d2035fa4d2bc48c/1080p/mp4/file.mp4"></video>
                </div>
            </div>




        </>
    )
}

export default page