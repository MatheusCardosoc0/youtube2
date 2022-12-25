import React from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
  return (
    <form className="flex">
      <button
        className="items-center px-2 rounded-l-lg bg-black"
        type={'submit'}
      >
        <AiOutlineSearch className="text-yellow-500" />
      </button>

      <div className="flex items-center bg-gradient-to-tr from-yellow-400 via-yellow-600 to-yellow-700 rounded-r-lg px-1">
        
        <input type={'search'} className="bg-transparent outline-none" />

        <AiOutlineClose />
      </div>
    </form>
  )
}

export default Searchbar
