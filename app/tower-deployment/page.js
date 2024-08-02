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
                    <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>Towers Deployment</h1>
                    <p className='mt-5 leading-7 font-thin'>
                        As a part of our integrated solution we conduct all the related civil work required to construct lattice towers, rooftop sites, monopoles and camouflaged towers, our activities and services: <br />
                        1- Conducting technical site survey and determining the type of site structure to be installed <br />
                        2- Construction of the required tower foundation which varies from dry raft to pilling <br />
                        3- Construction of site boundary walls <br />
                        4- Supply and installation of equipment shelter <br />
                        5- Supply and installation of rooftop poles, Monopoles, lattice towers and camouflaged towers. <br />
                        6- Supply and installation of grounding and lightning protection systems <br />
                        7- Performing all the electrical work in conformity with the project specifications <br />
                    </p>
                    <p className='mt-5 leading-7 font-thin'>Inteltec provides site acquisition (SA) services to telecom operators and other customers (governmental applications’ submission and follow up) as a part of its services portfolio and its experienced site acquisition team has acquired an extensive numbers of sites for its customers.
                        Inteltec’s site acquisition service includes the following distinct activities: <br />
                        • Study the sites’ design milestones based on customer’s sites process flow, and reflecting forecasted and actual dates. <br />
                        • Perform investigation in the market during and after sites’ design time to meet with customers requirements.  <br />
                        • Study the project specification’s and its initial issued plan in order to start ranking the candidates plan for each site.  <br />
                        • Perform all initial surveys for all candidates in order to be in conformity with the project objectives. <br />
                        • Finalize lease agreements with landlords in order to obtain rooftop GSM sites. <br />
                        • Obtain all required NOCs (No Objection Certificates) from the relevant services‘ departments in order to proceed with
                        sites’ permitting process. <br />
                        • Secure all required approvals and permits for sites’ locations from municipalities. <br />
                        • Solve all problems with landlords, official authorities and any problems which may face other concerned departments. <br />
                        • Create communications channels with any sensitive governmental center</p>
                </div>
                <div className='basis-1/2 h-auto'>
                    <video autoPlay muted loop className='h-full object-cover' src="https://video.wixstatic.com/video/f21e62_cd7709d9f13c4421a4a017f03eceebf7/1080p/mp4/file.mp4"></video>
                </div>
            </div>




        </>
    )
}

export default page