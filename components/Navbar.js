'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';


// ==== imports images ==== 
import inteltecLogo from './../public/image/logo.png'

// ==== icons == 
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ handleContact }) => {

    const [opennav, setOpenNav] = useState(false);
    const [isMobileMenu, setIsMobileMeu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);



useEffect(() => {
    window.addEventListener('scroll', () => {
        setIsSticky(window.scrollY > 0)
    })
}, [])


    const handleMenu = () => {
        setOpenNav(!opennav);
    }

    const mobileMenu = () => {
        setIsMobileMeu(!isMobileMenu)
    }



    return (
        <>

            <div className={`${isSticky ? 'sticky top-0 bg-gray-800' : ''} z-50 duration-200 ease-in-out`}>
                <nav className='container mx-auto flex items-center justify-between py-2 w-full z-10 relative'>
                    <Link href={'/'}><Image src={inteltecLogo} width={110} height={110} className='md:w-48' /></Link>
                    <HiMiniBars3 onClick={handleMenu} className='text-white text-2xl cursor-pointer md:hidden' />

                    {
                        opennav && (
                            <div className='text-white flex flex-col absolute left-0 top-full bg-topHeaderColor w-full p-3 gap-3 rounded-md font-light '>
                                <Link href={'/'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Home</Link>
                                <Link href={'/about'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>About</Link>
                                <div>
                                    <Link href={'#'} onClick={() => {
                                        mobileMenu()
                                    }} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out flex items-start justify-start p-1'>Services <IoMdArrowDropdown />
                                    </Link>

                                    {
                                        isMobileMenu && (
                                            <div className=' flex flex-col gap-3 w-52 p-2 bg-black capitalize rounded-md duration-150 ease-in-out z-30'>
                                                <Link href={'/tower-deployment'} className='hover:text-hoverBgColor'>Tower deployment</Link>
                                                <Link href={'/satellite-communication'} className='hover:text-hoverBgColor'>satellite Communication</Link>
                                                <Link href={'/ip-networks'} className='hover:text-hoverBgColor'>IP Networks</Link>
                                                <Link href={'/data-centers'} className='hover:text-hoverBgColor'>Data centers</Link>
                                                <Link href={'/rf-planning'} className='hover:text-hoverBgColor'>RF planning</Link>
                                                <Link href={'/wireless-networks'} className='hover:text-hoverBgColor'>Wireless Networks</Link>
                                                <Link href={'/enterprise-solutions'} className='hover:text-hoverBgColor'>Enterprise Solutions</Link>
                                                <Link href={'/ibs-services'} className='hover:text-hoverBgColor'>IBS Services</Link>
                                            </div>
                                        )
                                    }

                                </div>
                                <Link href={'/projects'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Projects</Link>
                                <Link href={'#'} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Partners</Link>
                                <Link href={'#'} onClick={handleContact} className=' text-[17px] hover:text-hoverBgColor duration-200 ease-in-out'>Contact</Link>
                            </div>
                        )
                    }



                    <ul className=' text-white md:flex justify-end gap-8 flex-wrap hidden'>
                        <Link href={'/'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Home</Link>
                        <Link href={'/about'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>About</Link>
                        <div className='relative group'>
                            <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out flex items-center gap-0.5'>Services <IoMdArrowDropdown />

                            </Link>
                            <div className='absolute -left-10 top-full flex flex-col gap-3 w-52 p-2 bg-black capitalize rounded-md invisible group-hover:visible duration-150 ease-in-out'>
                                <Link href={'/tower-deployment'} className='hover:text-hoverBgColor'>Tower deployment</Link>
                                <Link href={'/satellite-communication'} className='hover:text-hoverBgColor'>satellite Communication</Link>
                                <Link href={'/ip-networks'} className='hover:text-hoverBgColor'>IP Networks</Link>
                                <Link href={'/data-centers'} className='hover:text-hoverBgColor'>Data centers</Link>
                                <Link href={'/rf-planning'} className='hover:text-hoverBgColor'>RF planning</Link>
                                <Link href={'/wireless-networks'} className='hover:text-hoverBgColor'>Wireless Networks</Link>
                                <Link href={'/enterprise-solutions'} className='hover:text-hoverBgColor'>Enterprise Solutions</Link>
                                <Link href={'/ibs-services'} className='hover:text-hoverBgColor'>IBS Services</Link>
                            </div>
                        </div>

                        <Link href={'/projects'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Projects</Link>
                        <Link href={'#'} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Partners</Link>
                        <Link href={'#'} onClick={handleContact} className=' text-lg hover:text-hoverBgColor duration-200 ease-in-out'>Contact</Link>
                    </ul>

                </nav>



            </div>
        </>
    )
}

export default Navbar
