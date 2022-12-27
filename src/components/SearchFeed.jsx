import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchVideos'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Videos from './Videos'

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])


  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="flex">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className='overflow-y-scroll h-[92vh] flex flex-col w-[80%]'>

          <h2 className="p-2 text-3xl text-yellow-500 drop-shadow-[1px_1px_1px_black]">
            <b className="drop-shadow-[1px_1px_1px_yellow] text-white">
              Resultados de busca por
            </b>
            {' '+searchTerm} videos
          </h2>

          <Videos videos={videos} />
        </div>

      </div>
    </main>
  )
}

export default SearchFeed