"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Crown, FileArchive, Menu } from "lucide-react"
import NavLink from './nav-link'

const Navbar = () => {

  // Temporary State for auth session
  const [isLoggedIn, setLoggedin] = useState(false);

  // Toggle states for Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className='w-full sticky top-0 z-10 bg-white/10 dark:bg-black/10 backdrop-blur-md'>
      <nav className='container flex flex-row justify-between items-center py-4 md:py-6 mx-auto bg-transparent'>
        <div>
          <Link href={"/"} className='group'>
            <FileArchive className='h-fit w-fit' />
          </Link>
        </div>

        <div className='hidden md:flex flex-row gap-4 md:gap-6 lg:gap-8 items-center'>
          <NavLink href={"#pricing"}> Pricing </NavLink>
          {
            isLoggedIn ? (<NavLink href={"#dashboard"}> Dashboard </NavLink>) : (null)
          }
        </div>

        <div className='flex flex-row items-center gap-2.5'>
          {
            isLoggedIn ? (
              <div className='flex flex-row items-center gap-1 md:gap-2 lg:gap-3'>
                <NavLink href={"/upload"}> Upload PDF </NavLink>
                <Crown className='h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 fill-yellow-400 ml-3' />
                <div className='h-8 w-8 bg-red-300 rounded-full'></div>
              </div>
            ) : (
              <Link href={"#login"} className='text-xs md:text-sm font-semibold px-4 py-1.5 md:px-6 md:py-2 rounded-md md:rounded-lg cursor-pointer bg-linear-to-tr from-moonlight-200 via-moonlight-100 to-moonlight-200 text-[#212121] shadow-lg inset-shadow-2xs hover:scale-105 transition-all ease-in-out duration-200 hover:shadow-[1px_1px_16px_#A3A3CC]'>
                Log In
              </Link>
            )
          }
          <Menu className='inline-flex md:hidden h-4 w-4 sm:h-4.5 sm:w-4.5 cursor-pointer' />
        </div>
      </nav>
    </nav>
  )
}

export default Navbar