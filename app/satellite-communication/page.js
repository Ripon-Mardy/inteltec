import Navbar from '@/components/Navbar'
import React from 'react'


const page = () => {
    return (
        <>
            <div className='bg-gray-800 fixed w-full top-0 z-30'>
                <Navbar />
            </div>


           <section className='bg-topHeaderColor'>
           <div className='flex flex-col md:flex-row container mx-auto gap-10'>
                <div className=' md:basis-1/2 text-white pt-28 md:pt-40 h-auto py-10'>
                    <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>Satellite
                        Communication</h1>
                    <p className='mt-5 leading-7 font-thin'>
                        We use the latest satellite and VSAT communication technologies for data, voice and video transmission.
                        The network allows instant, reliable, cost-effective and secure communication anywhere in the region
                        Combining an unmatched level of service with globally-tested networking technologies from world leaders in telecommunications like ND Satcom and Intelsat, Inteltec is a major player in the revolution of corporate information management in the region.
                        Inteltec is a VSAT service provider in the Kingdom of Saudi Arabia under license received from the Communication and Information Technology Commission (CITC).
                        We provide end-to-end managed digital network services and data center services under the brand name Skyband.
                        Inteltec VSAT services are operational on Intelsat Satellite on Ku-Band frequency.
                        This allows us to offer very reliable and cost-effective solutions to our customers. Our VSAT Services are operational with a Master Earth Station (referred to as the “Hub”) located in Riyadh, the first of its kind in the Kingdom.

                        Our VSAT services are ideally suited for: <br />
                        * Corporate communication (voice, video, data and internet) <br />
                        * Manufacturing and distribution (online connectivity for ERP) <br />
                        * Banks (for ATMs, core banking, credit card authentication and disaster recovery) <br />
                        * Engineering and projects (pick-and-move solutions) <br />
                        * Oil and petroleum exploration (auto- tracking VSATs, connectivity at the remotest sites) <br />
                        * Internet, intranet and extranet services <br />
                        * Government, defense and aviation (most secure connectivity media) <br />
                        * Media and Education (eLearning) <br />
                        * Telemedicine <br />
                        * Business continuity planning <br />
                        * Village Public Telephony <br />
                        * GSM/UMTS operators (both RAN and Core network Backhauling) <br />
                    </p>
                </div>
                <div className='basis-1/2 h-auto'>
                    <video autoPlay muted loop className='h-full object-cover' src="https://video.wixstatic.com/video/f21e62_423f50c7eab448b2934b6e6728cebf5a/1080p/mp4/file.mp4"></video>
                </div>
            </div>
           </section>




        </>
    )
}

export default page