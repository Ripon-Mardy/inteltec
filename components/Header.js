'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


// ==== imports images ==== 
import inteltecLogo from './../public/image/logo.png'


// ==== icons == 
import { HiMiniBars3 } from "react-icons/hi2";

const Header = () => {

    const [opennav, setOpenNav] = useState(false);


    const handleMenu = () => {
        setOpenNav(!opennav);
    }

    return (
        <>



            <header className='z-10'>
                <h1 className='bg-topHeaderColor py-1 text-center text-white text-sm'> Inteltec Emirates Group</h1>
            </header>

            <main>

                <video className='absolute left-0 top-0 -z-10  h-[50vh] md:h-screen object-cover w-full overflow-hidden ' loop muted autoPlay src="https://video.wixstatic.com/video/f21e62_85b7e84cc266411b89ceeef62c403ab9/1080p/mp4/file.mp4" ></video>

                <div className='container mx-auto'>
                    <nav className='flex items-center justify-between py-3 w-full relative'>
                       <Image src={inteltecLogo} width={120} height={120} className='md:w-60' />
                       <HiMiniBars3 onClick={handleMenu} className='text-white text-2xl cursor-pointer md:hidden'/>

                       {
                        opennav && (
                            <div className='text-white flex flex-col absolute left-0 top-full bg-topHeaderColor w-full p-3 gap-3 rounded-md font-light '>
                       <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Home</Link>
                            <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>About</Link>
                            <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Services</Link>
                            <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Projects</Link>
                            <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Partners</Link>
                            <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Contact</Link>
                       </div>
                        )
                       }



                        <ul className=' text-white md:flex justify-end gap-8 flex-wrap hidden'>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Home</Link>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>About</Link>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Services</Link>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Projects</Link>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Partners</Link>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Contact</Link>
                        </ul>

                    </nav>


                    {/* ==== banner content ====  */}
                    <div className='mt-16 md:mt-20'>
                        <h1 className='text-4xl md:text-7xl text-white font-semibold'>Telco Networks...</h1>
                        <h1 className='text-4xl md:text-7xl text-white font-semibold'>Redefined</h1>
                        <div className='mt-10 flex gap-5'>
                        <button className='border p-2 px-5 text-sm md:text-lg font-light rounded-sm text-white uppercase hover:bg-buttonBgColor duration-200 ease-in-out'>learn more</button>
                        <button className=' p-2 px-5 text-sm md:text-lg font-light rounded-sm bg-buttonBgColor  text-white uppercase hover:bg-white hover:text-black duration-200 ease-in-out'>services</button>
                        </div>
                    </div>
                </div>


            </main>

        </>
    )
}

export default Header
