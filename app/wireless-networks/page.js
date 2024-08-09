import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='bg-gray-800 fixed w-full top-0 z-30'>
        <Navbar />
      </div>

      <section className='bg-topHeaderColor'>
        <div className='flex flex-col md:flex-row gap-10 container mx-auto'>
          <div className=' md:basis-1/2 text-white pt-28 md:pt-40 h-auto py-10'>
            <h1 className='text-4xl md:text-5xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>
              Wireless Networks
            </h1>
            <p className='mt-5 leading-7 font-thin'>
              Inteltec delivers partial or complete turnkey wireless telecom
              projects or services to licensed operators and service providers
              and corporate end users, to establish or enhance their network
              infrastructure. We can provide a full range of engineering,
              project roll-out management, operation & maintenance services that
              include: <br />
              * Project planning / RF, transmission, civil and structural
              engineering <br />
              * Site acquisition, zoning and permissions <br />
              * Construction management <br />
              * Site construction including furnishing of environmental
              facilities <br />
              * Tower and antenna installation <br />
              * Telecom installation, commissioning, testing and integration of
              all network elements, from core to access including transport{' '}
              <br />
              * Network parameter setting <br />
              * Site on air verification <br />
              * Network audits, bench marking and drive testing <br />
              * Network optimization <br />
              * Network acceptance <br />
              * Field services maintenance <br />
              * OSS support including performance alarm and configuration
              management <br />
              * NMS operation. <br />
            </p>
            <p className='mt-5 leading-7 font-thin'>
              Starting from project planning, Inteltec implementation activities
              cover a wide range of technologies and fields: <br />
              * Microwave transmission implementation (Point to Point and Point
              to Multi Point) for the different technologies (PDH, Ethernet,
              WiMAX, etc....) <br />
              * RF antenna system installation (Antennas, Antenna lines, RF
              equipments) <br />
              * RAN Network Implementation, Commissioning and Integration
              (BTS/NodeB/eNB and BSC/RNC/aGW) <br />
              * Core network implementation ,Commissioning and integration
              (TSCM/MSC/MGW) <br />
              * Network acceptance and quality audit <br />
              * Field services maintenance <br />
              * OSS support including performance alarm and configuration
              management <br />
              * NMS operation. <br />
              * DC Power Supply Systems and Solutions <br />
            </p>
          </div>
          <div className='basis-1/2 h-auto'>
            <video
              autoPlay
              muted
              loop
              className='h-full object-cover'
              src='https://video.wixstatic.com/video/f21e62_7a0e82736f204552b33949e2b46f16fc/1080p/mp4/file.mp4'
            ></video>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
