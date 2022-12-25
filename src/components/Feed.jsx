import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchVideos'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])

  console.log(videos)

  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="flex">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className='overflow-y-scroll h-[92vh] flex flex-col'>

          <h2 className="p-2 text-3xl text-yellow-500 drop-shadow-[1px_1px_1px_black]">
            <b className="drop-shadow-[1px_1px_1px_yellow] text-black">{selectedCategory}</b>
            Videos
          </h2>

          <Videos videos={videos} />
        </div>

      </div>
    </main>
  )
}

export default Feed
