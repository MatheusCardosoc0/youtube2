import React from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs'
import { IoAppsSharp } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-14 h-14  opacity-95 sticky border-b-2 border-yellow-600 shadow-[1px_5px_30px_#d6af00] bg-[#ffffff]'>
      <div className='flex items-center text-3xl gap-8'>

        <GiHamburgerMenu className='text-yellow-600 drop-shadow-[3px_1px_1px_black]' />

        <Link to={"/"}>
          <div className='flex gap-1 items-center justify-center'>
            <BsYoutube className='text-yellow-500 drop-shadow-[2px_1px_1px_black]' />
            <span className='text-yellow-500 drop-shadow-[1px_1px_1px_black]'>Youtube</span>
          </div>
        </Link>
      </div>

      <div className='flex items-center justify-center gap-5'>
        <Searchbar />
      </div>

      <div className='flex gap-4'>
        <div className='text-xl p-3 bg-gradient-to-b from from-yellow-300 to-yellow-600 rounded-full'>
          <TiMicrophone />
        </div>
        <div className='flex gap-5 items-center text-xl'>
          <BsCameraVideo />
          <IoAppsSharp />

          <div className='relative'>
            <BsBell />
            <span className='absolute bottom-2 left-2 text-xs bg-yellow-600 rounded-full px-1'>
              9
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar