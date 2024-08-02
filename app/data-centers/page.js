import Navbar from '@/components/Navbar'
import React from 'react'


const page = () => {
    return (
        <>
            <div className='bg-gray-800 fixed w-full top-0 z-30'>
                <Navbar />
            </div>


            <div className='flex flex-col md:flex-row'>
                <div className='container mx-auto md:basis-1/2 bg-topHeaderColor text-white pt-28 md:pt-40 h-auto py-10 md:pl-24'>
                    <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>
                    Data Centers</h1>
                    <p className='mt-5 leading-7 font-thin'>
                    Inteltec datacenter solution bridges the gap between the complete flexibility you get with do-it-yourself and the convenience of a comprehensive integrated solution. You get to enjoy the high performance of the carefully selected systems with the best prices ever.
Thanks for our strong partnership with the IT market leaders and the experienced IT stuff we have, that allowed us taking on the responsibilities of design, supply, installation and integration of the entire data center domain starting from environmental control & monitoring, Power supplies, Racks through the IT-infrastructure, Routers, Switches, Servers, ending with making all the components interoperable and tested. In other words, you no longer need to worry about purchasing, deploying, scaling and integrating the physical devices. <br />

By choosing Inteltec you will get: <br />
1- The highest performance devices <br />
2- The most reasonable prices <br />
3- The entire spectrum of Datacenter products <br />
4- Experienced deployment <br />
5- Greenest technology <br />
                    </p>
                </div>
                <div className='basis-1/2 h-auto'>
                    <video autoPlay muted loop className='h-full object-cover' src="https://video.wixstatic.com/video/f21e62_26d58a1ad88b4659aa8dcad56cf33b06/1080p/mp4/file.mp4"></video>
                </div>
            </div>




        </>
    )
}

export default page