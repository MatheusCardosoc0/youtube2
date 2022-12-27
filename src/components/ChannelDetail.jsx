import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchVideos'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [channelVideos, setChannelVideos] = useState(null)
  const { id } = useParams()

  console.log(channelVideos)

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`).then(data =>
      setChannelDetail(data?.items[0])
    )

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(data =>
      setChannelVideos(data?.items)
    )
  }, [id])

  return (
    <section className="flex flex-col items-center overflow-hidden">
      <div className="h-[20vh] gradient-03 w-full absolute z-[-1] top-0 border-b-4 border-yellow-500 shadow-[0px_20px_100px_black]" />

      <div className='h-screen w-full z-[-2] absolute bg-gray-600' />

      <div className="mt-[10vh]">
        <ChannelCard channel={channelDetail} />
      </div>


      <div className='flex flex-wrap gap-6 justify-center mt-20 h-[80vh] overflow-y-scroll bg-gray-600'>
        {channelVideos?.map(video => (
          <VideoCard video={video} />
        ))}
      </div>
  
    </section>
  )
}

export default ChannelDetail
