import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {

  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(search){
      navigate(`/search/${search}`)
    }

    setSearch('')
  }

  return (
    <form className="flex"
    onSubmit={handleSubmit}>
      <button
        className="items-center px-2 rounded-l-lg bg-black"
        type={'submit'}
      >
        <AiOutlineSearch className="text-yellow-500" />
      </button>

      <div className="flex items-center bg-gradient-to-tr from-yellow-400 via-yellow-600 to-yellow-700 rounded-r-lg px-1">
        
        <input type={'search'} className="bg-transparent outline-none placeholder:text-black"
        placeholder='Buscar'
        onChange={e => setSearch(e.target.value)}
        value={search} />

        <AiOutlineClose />
      </div>
    </form>
  )
}

export default Searchbar
