'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';


// ==== imports images ==== 
import inteltecLogo from './../public/image/logo.png'

// ==== icons == 
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ handleContact }) => {


    const [opennav, setOpenNav] = useState(false);
    const [isMobileMenu, setIsMobileMeu] = useState(false)


    const handleMenu = () => {
        setOpenNav(!opennav);
    }

    const mobileMenu = () => {
        setIsMobileMeu(!isMobileMenu)
    }

    return (
        <>

            <div className='container mx-auto'>
                <nav className='flex items-center justify-between py-3 w-full z-10 relative'>
                    <Image src={inteltecLogo} width={120} height={120} className='md:w-60' />
                    <HiMiniBars3 onClick={handleMenu} className='text-white text-2xl cursor-pointer md:hidden' />

                    {
                        opennav && (
                            <div className='text-white flex flex-col absolute left-0 top-full bg-topHeaderColor w-full p-3 gap-3 rounded-md font-light '>
                                <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Home</Link>
                                <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>About</Link>
                                <div>
                                    <Link href={'#'} onClick={mobileMenu} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out flex items-start justify-start p-1'>Services <IoMdArrowDropdown />
                                    </Link>

                                    {
                                        isMobileMenu && (
                                            <div className=' flex flex-col gap-3 w-52 p-2 bg-black capitalize rounded-md duration-150 ease-in-out'>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>Tower deployment</Link>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>satellite Communication</Link>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>IP Networks</Link>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>Data centers</Link>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>RF planning</Link>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>Wireless Networks</Link>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>Enterprise Solutions</Link>
                                                <Link href={'#'} className='hover:text-hoverBgColor'>IBS Services</Link>
                                            </div>
                                        )
                                    }

                                </div>
                                <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Projects</Link>
                                <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Partners</Link>
                                <Link href={'#'} onClick={handleContact} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Contact</Link>
                            </div>
                        )
                    }



                    <ul className=' text-white md:flex justify-end gap-8 flex-wrap hidden'>
                        <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Home</Link>
                        <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>About</Link>
                        <div className='relative group'>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out flex items-center gap-0.5'>Services <IoMdArrowDropdown />

                            </Link>
                            <div className='absolute -left-10 top-full flex flex-col gap-3 w-52 p-2 bg-black capitalize rounded-md invisible group-hover:visible duration-150 ease-in-out'>
                                <Link href={'#'} className='hover:text-hoverBgColor'>Tower deployment</Link>
                                <Link href={'#'} className='hover:text-hoverBgColor'>satellite Communication</Link>
                                <Link href={'#'} className='hover:text-hoverBgColor'>IP Networks</Link>
                                <Link href={'#'} className='hover:text-hoverBgColor'>Data centers</Link>
                                <Link href={'#'} className='hover:text-hoverBgColor'>RF planning</Link>
                                <Link href={'#'} className='hover:text-hoverBgColor'>Wireless Networks</Link>
                                <Link href={'#'} className='hover:text-hoverBgColor'>Enterprise Solutions</Link>
                                <Link href={'#'} className='hover:text-hoverBgColor'>IBS Services</Link>
                            </div>
                        </div>

                        <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Projects</Link>
                        <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Partners</Link>
                        <Link href={'#'} onClick={handleContact} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Contact</Link>
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
        </>
    )
}

export default Navbar
