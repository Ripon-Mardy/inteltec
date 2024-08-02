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
                        IP Networks</h1>
                    <p className='mt-5 leading-7 font-thin'>
                        Inteltec can design, deploy and upgrade networks of any bandwidth that meets your needs today, tomorrow and in the future. Good network design must recognise the requirements for business and technical goals, including availability, resilience, scalability, affordability, security, and manageability.
                        Whether you are looking to build a LAN/WAN, re-design your current LAN/WAN, or are considering ways to optimise your current LAN/WAN infrastructure, Intletec can help.
                        Inteltec enables businesses to be successful by designing and implementing Local and Wide Area Networks (LAN and WAN) that maximise the potential of voice and data technologies to facilitate the exchange of information.
                        From wiring to LAN switching, through internet connectivity to the most complex protocol configurations and large-scale enterprise networks, Intletec has the experience necessary to design the voice and data network solution your business requires.
                        Our experienced engineers can help integrate and support security-rich data, voice and video networks, enable intelligent network infrastructures, and leverage new technologies like virtual private networking (VPN), optical, voice- and video-over-IP, content delivery networks, our services include: <br />
                        1- Complete LAN, WAN and Wireless HSPA solutions <br />
                        2- Datacenters Infrastructure (UPS, Power Supply and Environmental Control) <br />
                        3- VoIP Systems and Networks <br />
                    </p>
                </div>
                <div className='basis-1/2 h-auto'>
                    <video autoPlay muted loop className='h-full object-cover' src="https://video.wixstatic.com/video/f21e62_f87bf6b53bf4477c9564209fb3be24c1/1080p/mp4/file.mp4"></video>
                </div>
            </div>




        </>
    )
}

export default page